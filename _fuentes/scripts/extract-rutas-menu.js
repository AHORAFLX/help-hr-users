'use strict';

// Genera _fuentes/rutas-menu.md: el arbol de menu del empleado con las etiquetas
// en es-ES ya resueltas. De aqui salen los "ve a X > Y" de los articulos.
//
//   node _fuentes/scripts/extract-rutas-menu.js

const fs = require('fs');
const path = require('path');
const { parseSeed } = require('./lib/flexygo-seed.js');

const STATICDATA = path.join(__dirname, '..', '..', '..', 'Flexygo_HR.Conf.Database', 'scripts', 'staticdata');
const OUT = path.join(__dirname, '..', 'rutas-menu.md');

// Raices que ve el empleado. `Maintenance` queda fuera a proposito: es el panel de
// configuracion de Gestor/RRHH y no entra en el alcance de esta documentacion.
const RAICES_EMPLEADO = [
  ['Employee Nav Bar', 'Barra de navegacion principal del empleado'],
  ['EmployeeSpaceMenu', 'Menu de "Mi espacio" (My Space)'],
  ['APP Employee Nav Bar', 'Barra de navegacion de la APP movil'],
  ['HR_Mobile_MainMenu', 'Menu principal de la APP movil'],
];

const nodos = parseSeed(path.join(STATICDATA, 'navigation_nodes.sql'));
const traducciones = parseSeed(path.join(STATICDATA, 'translate.sql'));

// Etiquetas es-ES. Prioridad: Nodes > Menus > cualquier otra area.
const PRIORIDAD = { Nodes: 3, Menus: 2 };
const etiquetas = new Map();
for (const t of traducciones) {
  if (t.CultureId !== 'es-ES' || !t.Original || !t.Text) continue;
  const clave = t.Original.trim();
  const peso = PRIORIDAD[t.Area] || 1;
  const previo = etiquetas.get(clave);
  if (!previo || peso > previo.peso) etiquetas.set(clave, { texto: t.Text, peso, area: t.Area });
}

const porId = new Map(nodos.map((n) => [n.NodeId.toUpperCase(), n]));
const hijosDe = new Map();
for (const n of nodos) {
  const padre = n.ParentNodeId ? n.ParentNodeId.toUpperCase() : null;
  // Si el padre no esta en este seed, el nodo es raiz a efectos practicos:
  // cuelga de un nodo del framework base de Flexygo, no del addon de HR.
  const clave = padre && porId.has(padre) ? padre : '__RAIZ__';
  if (!hijosDe.has(clave)) hijosDe.set(clave, []);
  hijosDe.get(clave).push(n);
}
for (const lista of hijosDe.values()) {
  lista.sort((a, b) => (a.Order || 0) - (b.Order || 0) || a.Title.localeCompare(b.Title));
}

function etiquetaDe(titulo) {
  const t = etiquetas.get(titulo.trim());
  return t ? t.texto : null;
}

function limpiar(titulo) {
  // Algunos titulos traen HTML incrustado (p.ej. iconos <i class=...>).
  return titulo.replace(/<[^>]*>?/g, '').replace(/\\$/, '').trim();
}

// Subarboles de configuracion/Gestor que no entran en el alcance.
const PODAR = new Set(['Maintenance', 'Other', 'Otros', 'Tablas Maestras', 'Security']);

const lineas = [];
const vistos = new Set();

function render(nodo, nivel) {
  const sangria = '  '.repeat(nivel);
  const titulo = limpiar(nodo.Title);

  if (nodo.TypeId === 'separator') return;
  if (PODAR.has(titulo)) return;
  if (vistos.has(nodo.NodeId.toUpperCase())) return;
  vistos.add(nodo.NodeId.toUpperCase());

  const es = etiquetaDe(titulo);
  const nombre = es || titulo;
  const detalles = [];
  if (es && es !== titulo) detalles.push(`original: \`${titulo}\``);
  else if (!es) detalles.push('**sin traduccion es-ES**');
  detalles.push(`tipo: \`${nodo.TypeId}\``);
  if (nodo.PageTypeId) detalles.push(`vista: \`${nodo.PageTypeId}\``);
  if (nodo.Enabled === false) detalles.push('⛔ **deshabilitado**');

  lineas.push(`${sangria}- **${nombre}** — ${detalles.join(' · ')}`);

  const hijos = hijosDe.get(nodo.NodeId.toUpperCase()) || [];
  for (const h of hijos) render(h, nivel + 1);
}

lineas.push('# Rutas de menu del empleado');
lineas.push('');
lineas.push('> Generado por `_fuentes/scripts/extract-rutas-menu.js`. No editar a mano.');
lineas.push('> Fuentes: `navigation_nodes.sql` + `translate.sql` (es-ES) del repo `Flexygo_HR`.');
lineas.push('');
lineas.push('Usa **siempre** la etiqueta en negrita para escribir un recorrido en un articulo');
lineas.push('(`ve a Fichajes > Mi jornada`). Si un nodo aparece como `sin traduccion es-ES`,');
lineas.push('la aplicacion lo muestra en ingles: escribelo tal cual y avisa de la incidencia.');
lineas.push('');
lineas.push('Los nodos marcados como ⛔ **deshabilitado** no se ven en la aplicacion:');
lineas.push('no los documentes como disponibles.');
lineas.push('');
lineas.push('Quedan fuera a proposito los subarboles de configuracion de Gestor/RRHH:');
lineas.push('`Maintenance`, `Otros` / `Other`, `Tablas Maestras` y `Security`.');
lineas.push('');

for (const [titulo, descripcion] of RAICES_EMPLEADO) {
  const raiz = nodos.find((n) => n.Title === titulo);
  if (!raiz) {
    lineas.push(`## ${titulo}`, '', '> No encontrado en el seed.', '');
    continue;
  }
  lineas.push(`## ${descripcion}`);
  lineas.push('');
  lineas.push(`Raiz: \`${titulo}\` · NodeId \`${raiz.NodeId}\``);
  lineas.push('');
  const hijos = hijosDe.get(raiz.NodeId.toUpperCase()) || [];
  for (const h of hijos) render(h, 0);
  lineas.push('');
}

// Entradas de primer nivel que cuelgan del framework base (Home, News, My Space...).
const sueltos = (hijosDe.get('__RAIZ__') || []).filter(
  (n) => !RAICES_EMPLEADO.some(([t]) => t === n.Title) && n.Title !== 'Maintenance' && n.TypeId !== 'separator'
);
if (sueltos.length) {
  lineas.push('## Entradas de primer nivel (framework base)');
  lineas.push('');
  lineas.push('Cuelgan de un nodo que no forma parte del addon de HR.');
  lineas.push('');
  for (const n of sueltos) render(n, 0);
  lineas.push('');
}

fs.writeFileSync(OUT, lineas.join('\n'), 'utf8');
console.log(`rutas-menu.md escrito: ${lineas.length} lineas, ${nodos.length} nodos analizados.`);
