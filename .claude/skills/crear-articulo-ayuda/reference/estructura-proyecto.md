# Estructura de archivos y navegación de este proyecto

Fuente de verdad: `mkdocs.yml` y el índice de temario
`documentacion-indice-preguntas.md` (raíz del repo). Si algo de este documento
discrepa con ellos, mandan ellos.

## Alcance del sitio

Este sitio documenta **solo la ruta Empleado** (autoservicio): lo que una persona
empleada puede hacer por sí misma. La configuración de Gestor/RRHH (tablas maestras,
nóminas, integraciones, informes de gestión) **no entra**. Si un artículo te pide
explicar cómo se configura algo a nivel de empresa, para y pregunta.

## Una carpeta por categoría, uno o varios artículos dentro

El temario son categorías, y cada categoría es **una carpeta** bajo `docs/`. Dentro de
la carpeta hay **uno o varios artículos** `.es.md`, según cuántos bloques temáticos
tenga esa categoría en `documentacion-indice-preguntas.md` (ahí cada bloque es un
`###` con sus preguntas). Una categoría con un único bloque tiene un solo artículo en
su carpeta. **Cada pregunta del índice sigue siendo un apartado `##`** dentro del
artículo que le corresponde. No hay más capas que categoría → artículo → pregunta.

```
docs/
  index.es.md                              ← portada
  tus-paginas-personales/
    home.es.md
    area-personal.es.md
  instancias-y-solicitudes/
    tipos-de-instancia.es.md
    solicitud-seguimiento-y-validacion.es.md
  fichajes/
    fichar.es.md
    consulta-y-correcciones.es.md
  ausencias-y-vacaciones/
    solicitud-y-cancelacion.es.md
    consulta-de-totales.es.md
  planificacion-de-turnos/
    mi-planificacion.es.md
  mis-datos-laborales/
    mi-contrato.es.md
  equipos-y-estructura-corporativa/
    mi-responsable.es.md
    mi-equipo.es.md
    mi-unidad-organizativa.es.md
  vigilancia-de-la-salud/
    mis-vigilancias-de-salud.es.md
  cursos/
    cursos-y-certificaciones.es.md
  reservas-viajes-y-gastos/
    reservas.es.md
    gastos.es.md
    viajes.es.md
  documentacion-y-comunicacion-con-la-empresa/
    noticias.es.md
    documentacion.es.md
    buzon-de-sugerencias.es.md
  docs_assets/
    <imágenes>
```

### Nombres de carpeta y de archivo

**kebab-case, sin espacios, sin tildes, sin números, siempre `.es.md`.** Se aplica
igual a la carpeta de la categoría y al nombre del artículo.

- Bien: `mis-datos-laborales/mi-contrato.es.md`, `fichajes/fichar.es.md`
- Mal: `Mi contrato y datos laborales.es.md`, `06-planificación.es.md`, `Fichajes.md`

El título (`H1`) sí lleva tildes y mayúsculas normales: `# Mi contrato`.

Solo se escribe la versión en español. El inglés (`.en.md`) queda para una pasada
posterior; no lo crees por iniciativa propia.

## Registrar el artículo en `mkdocs.yml`

La navegación es **manual**: un archivo nuevo no aparece en el menú hasta que añades
su entrada. Cada categoría es una entrada de primer nivel con una lista anidada de sus
artículos. La ruta va **sin el sufijo de idioma** (el plugin `i18n` resuelve
`fichajes/fichar.md` → `fichajes/fichar.es.md`), y la etiqueta de cada artículo
**coincide con su `H1`**:

```yaml
nav:
  - Inicio: index.md
  - Fichajes:
      - Fichar: fichajes/fichar.md
      - Consulta y correcciones: fichajes/consulta-y-correcciones.md
```

El orden del `nav` es el del temario, no alfabético: primero las categorías en su
orden, y dentro de cada una sus artículos en el orden de sus bloques. No reordenes ni
reescribas entradas existentes: añade solo la tuya en su sitio. Si añades un artículo a
una categoría que hoy tiene uno solo, conviertes esa entrada en una lista anidada.

## Enlaces internos

Los artículos ya no comparten siempre carpeta, así que los enlaces son relativos a la
posición de cada fichero:

```markdown
Consulta [Solicitud y cancelación](../ausencias-y-vacaciones/solicitud-y-cancelacion.md)
para pedir tus días.
```

- Dentro de la misma carpeta, sin prefijo: `[Fichar](fichar.md)`.
- Hacia otra carpeta, con `../nombre-carpeta/`: `[Mi contrato](../mis-datos-laborales/mi-contrato.md)`.
- Siempre al `.md`, **nunca** al `.es.md` — el plugin `i18n` lo resuelve.
- Para enlazar a un apartado concreto, usa el ancla que genera el título:
  `[¿Cómo solicito vacaciones?](../ausencias-y-vacaciones/solicitud-y-cancelacion.md#como-solicito-vacaciones-o-ausencias)`.

## Encabezados

- Un único `#` (el título del artículo).
- Un `##` por pregunta del índice, con el texto de la pregunta.
- `###` para subdividir una respuesta larga.
- **Nunca `####` o más**: con `toc_depth: 3` no aparecen en el índice de la página.

## Imágenes y recursos

- Van en `docs/docs_assets/` (una sola carpeta compartida, no dentro de cada categoría),
  con el mismo criterio de nombres (kebab-case sin tildes).
- Cuando haga falta una captura que no tenemos, deja el marcador en su sitio exacto:
  `<!-- TODO:captura: pantalla de fichaje con el botón de entrada resaltado -->`
  y añade la entrada correspondiente a `_fuentes/capturas-pendientes.md`.
- No inventes rutas de imagen ni enlaces a capturas que no existen.

## Carpetas que NO debes tocar

- `docs/stylesheets/fh-structural/`, `docs/javascripts/fh-structural/`,
  `docs/docs_assets/fh-structural/` — recursos estructurales de la plantilla.
- `overrides/` — plantillas del tema.
- `site/` — salida de `mkdocs build`.
- `_fuentes/*.md` — generados por script; se regeneran, no se editan a mano.

## Comprobar antes de terminar

```bash
node _fuentes/scripts/check-docs.js
```

Valida nombres de archivo, entradas del `nav`, enlaces internos, niveles de encabezado
y un único `H1`, y cuenta las capturas pendientes.
