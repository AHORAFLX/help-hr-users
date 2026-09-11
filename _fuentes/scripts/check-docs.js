'use strict';

// Verificacion estatica del sitio, para compensar que no hay mkdocs en local.
//
//   node _fuentes/scripts/check-docs.js
//
// Sale con codigo 1 si hay errores. Los avisos no rompen.

const fs = require('fs');
const path = require('path');

const RAIZ = path.join(__dirname, '..', '..');
const DOCS = path.join(RAIZ, 'docs');
const MKDOCS = path.join(RAIZ, 'mkdocs.yml');
const GLOSARIO = path.join(RAIZ, '_fuentes', 'glosario-ui.es.md');

const errores = [];
const avisos = [];

// --- nav de mkdocs.yml -------------------------------------------------------
// El bloque nav es una lista plana de `- Etiqueta: ruta.md`, sin anidamiento.
function leerNav() {
  const texto = fs.readFileSync(MKDOCS, 'utf8');
  const lineas = texto.split(/\r?\n/);
  const inicio = lineas.findIndex((l) => l.trim() === 'nav:');
  if (inicio === -1) {
    errores.push('mkdocs.yml: no se encontro el bloque `nav:`');
    return [];
  }

  const entradas = [];
  for (let i = inicio + 1; i < lineas.length; i += 1) {
    const linea = lineas[i];
    if (linea.trim() === '' || linea.startsWith('#')) continue;
    // Fin del bloque: una clave de primer nivel sin sangria.
    if (/^\S/.test(linea)) break;
    const m = linea.match(/^\s+-\s+(.+?):\s*(.+?)\s*$/);
    if (m) entradas.push({ etiqueta: m[1].trim(), ruta: m[2].trim() });
  }
  return entradas;
}

const nav = leerNav();
if (!nav.length) errores.push('mkdocs.yml: el bloque `nav:` esta vacio');

// --- ficheros de docs/, recorriendo subcarpetas ------------------------------
// Los artículos viven ahora en subcarpetas por categoría (docs/<carpeta>/<articulo>.es.md).
// Se ignoran los recursos estructurales (docs_assets, stylesheets, javascripts).
const CARPETAS_IGNORADAS = new Set(['docs_assets', 'stylesheets', 'javascripts']);

function listarMarkdown(dir, base) {
  const resultado = [];
  for (const d of fs.readdirSync(dir, { withFileTypes: true })) {
    if (d.isDirectory()) {
      if (base === '' && CARPETAS_IGNORADAS.has(d.name)) continue;
      resultado.push(...listarMarkdown(path.join(dir, d.name), base ? `${base}/${d.name}` : d.name));
    } else if (d.isFile() && d.name.endsWith('.md')) {
      resultado.push(base ? `${base}/${d.name}` : d.name);
    }
  }
  return resultado;
}

const articulos = listarMarkdown(DOCS, '').sort();

const PATRON_NOMBRE = /^([a-z0-9]+(-[a-z0-9]+)*\/)*[a-z0-9]+(-[a-z0-9]+)*\.es\.md$/;
for (const nombre of articulos) {
  if (!PATRON_NOMBRE.test(nombre)) {
    errores.push(`docs/${nombre}: el nombre (y sus carpetas) debe ser kebab-case sin tildes ni espacios y terminar en .es.md`);
  }
}

// --- cada entrada del nav resuelve a un fichero ------------------------------
const enNav = new Set();
for (const { etiqueta, ruta } of nav) {
  if (!ruta.endsWith('.md')) {
    errores.push(`nav "${etiqueta}": la ruta "${ruta}" no acaba en .md`);
    continue;
  }
  if (ruta.endsWith('.es.md') || ruta.endsWith('.en.md')) {
    errores.push(`nav "${etiqueta}": la ruta lleva sufijo de idioma ("${ruta}"); el plugin i18n lo resuelve, usa "${ruta.replace(/\.(es|en)\.md$/, '.md')}"`);
    continue;
  }
  const esperado = ruta.replace(/\.md$/, '.es.md');
  enNav.add(esperado);
  if (!fs.existsSync(path.join(DOCS, esperado))) {
    errores.push(`nav "${etiqueta}": falta el fichero docs/${esperado}`);
  }
}

// --- articulos que existen pero no estan en el nav ---------------------------
for (const nombre of articulos) {
  if (!enNav.has(nombre)) {
    avisos.push(`docs/${nombre}: existe pero no esta en el nav, no se vera en el menu`);
  }
}

// --- glosario ----------------------------------------------------------------
const terminos = new Set();
if (fs.existsSync(GLOSARIO)) {
  const texto = fs.readFileSync(GLOSARIO, 'utf8');
  for (const linea of texto.split(/\r?\n/)) {
    const m = linea.match(/^\|\s*(.+?)\s*\|\s*`(.+?)`\s*\|$/);
    if (m && m[1] !== 'Español (lo que ve el usuario)') terminos.add(m[1].replace(/\\\|/g, '|').toLowerCase());
  }
} else {
  avisos.push('_fuentes/glosario-ui.es.md no existe; se omite la comprobacion de terminologia');
}

// --- contenido de cada articulo ---------------------------------------------
let capturasTotales = 0;

for (const nombre of articulos) {
  const ruta = path.join(DOCS, nombre);
  const texto = fs.readFileSync(ruta, 'utf8');
  const lineas = texto.split(/\r?\n/);

  let enBloqueCodigo = false;
  let h1 = 0;
  const capturas = [];

  lineas.forEach((linea, idx) => {
    const n = idx + 1;

    if (/^\s*```/.test(linea)) {
      enBloqueCodigo = !enBloqueCodigo;
      return;
    }
    if (enBloqueCodigo) return;

    if (/^# /.test(linea)) h1 += 1;
    if (/^#{4,} /.test(linea)) {
      errores.push(`docs/${nombre}:${n}: encabezado de nivel 4 o mas; con toc_depth: 3 no aparece en el indice`);
    }

    if (/<!--\s*TODO:captura/.test(linea)) capturas.push(n);

    // Enlaces internos relativos a .md
    const enlaces = linea.matchAll(/\]\(([^)\s]+\.md)(#[^)]*)?\)/g);
    for (const m of enlaces) {
      const destino = decodeURIComponent(m[1]);
      if (/^https?:/.test(destino)) continue;
      if (destino.endsWith('.es.md') || destino.endsWith('.en.md')) {
        errores.push(`docs/${nombre}:${n}: el enlace "${destino}" lleva sufijo de idioma; usa "${destino.replace(/\.(es|en)\.md$/, '.md')}"`);
        continue;
      }
      const candidato = path.join(path.dirname(ruta), destino.replace(/\.md$/, '.es.md'));
      if (!fs.existsSync(candidato) && !fs.existsSync(path.join(path.dirname(ruta), destino))) {
        errores.push(`docs/${nombre}:${n}: el enlace "${destino}" no resuelve a ningun fichero`);
      }
    }

    // Rutas de menu tipo **Fichajes > Mi jornada**: cada tramo deberia existir
    // en el glosario, o el articulo esta inventando el nombre de una pantalla.
    if (terminos.size) {
      const rutas = linea.matchAll(/\*\*([^*]+?\s>\s[^*]+?)\*\*/g);
      for (const m of rutas) {
        for (const tramo of m[1].split('>').map((s) => s.trim())) {
          if (tramo && !terminos.has(tramo.toLowerCase())) {
            avisos.push(`docs/${nombre}:${n}: "${tramo}" no aparece en el glosario; comprueba el nombre real de la pantalla`);
          }
        }
      }
    }
  });

  if (h1 === 0) errores.push(`docs/${nombre}: no tiene encabezado H1`);
  if (h1 > 1) errores.push(`docs/${nombre}: tiene ${h1} encabezados H1, debe tener exactamente uno`);

  if (capturas.length) {
    capturasTotales += capturas.length;
    console.log(`  ${nombre}: ${capturas.length} captura(s) pendiente(s) (lineas ${capturas.join(', ')})`);
  }
}

// --- resultado ---------------------------------------------------------------
console.log('');
console.log(`Articulos: ${articulos.length} · entradas de nav: ${nav.length} · capturas pendientes: ${capturasTotales}`);

if (avisos.length) {
  console.log('');
  console.log(`AVISOS (${avisos.length}):`);
  for (const a of avisos) console.log(`  - ${a}`);
}

if (errores.length) {
  console.log('');
  console.log(`ERRORES (${errores.length}):`);
  for (const e of errores) console.log(`  - ${e}`);
  process.exit(1);
}

console.log('');
console.log('Sin errores.');
