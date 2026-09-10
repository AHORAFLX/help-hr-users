# Estructura de archivos y navegación de este proyecto

Fuente de verdad: `mkdocs.yml` y el índice de temario
`documentacion-indice-preguntas.md` (raíz del repo). Si algo de este documento
discrepa con ellos, mandan ellos.

## Alcance del sitio

Este sitio documenta **solo la ruta Empleado** (autoservicio): lo que una persona
empleada puede hacer por sí misma. La configuración de Gestor/RRHH (tablas maestras,
nóminas, integraciones, informes de gestión) **no entra**. Si un artículo te pide
explicar cómo se configura algo a nivel de empresa, para y pregunta.

## Un artículo por categoría

El temario son **12 categorías** y cada categoría es **un solo artículo**. Dentro de
él, **cada pregunta del índice es un apartado `##`**. No hay capas
(Conceptos/Configuración/Uso), ni carpetas por categoría, ni artículos sueltos por
pregunta.

```
docs/
  index.es.md                              ← portada
  la-pantalla-de-inicio.es.md
  area-personal.es.md
  instancias-y-solicitudes.es.md
  fichajes.es.md
  ausencias-y-vacaciones.es.md
  planificacion.es.md
  mi-contrato-y-datos-laborales.es.md
  equipos-y-estructura-corporativa.es.md
  vigilancia-de-la-salud.es.md
  cursos-y-certificaciones.es.md
  reservas-viajes-y-gastos.es.md
  noticias-documentacion-y-comunicacion.es.md
  docs_assets/
    <imágenes>
```

### Nombres de archivo

**kebab-case, sin espacios, sin tildes, sin números, siempre `.es.md`.**

- Bien: `mi-contrato-y-datos-laborales.es.md`, `planificacion.es.md`
- Mal: `Mi contrato y datos laborales.es.md`, `06-planificación.es.md`, `Fichajes.md`

El título (`H1`) sí lleva tildes y mayúsculas normales: `# Mi contrato y datos laborales`.

Solo se escribe la versión en español. El inglés (`.en.md`) queda para una pasada
posterior; no lo crees por iniciativa propia.

## Registrar el artículo en `mkdocs.yml`

La navegación es **manual**: un archivo nuevo no aparece en el menú hasta que añades
su entrada. La ruta va **sin el sufijo de idioma** (el plugin `i18n` resuelve
`fichajes.md` → `fichajes.es.md`), y la etiqueta del menú **coincide con el `H1`** del
artículo:

```yaml
nav:
  - Inicio: index.md
  - Fichajes: fichajes.md
```

El orden del `nav` es el del temario, no alfabético. No reordenes ni reescribas
entradas existentes: añade solo la tuya en su sitio.

## Enlaces internos

Todos los artículos están en la misma carpeta, así que los enlaces son directos y sin
codificar:

```markdown
Consulta [Ausencias y vacaciones](ausencias-y-vacaciones.md) para pedir tus días.
```

- Siempre al `.md`, **nunca** al `.es.md` — el plugin `i18n` lo resuelve.
- Para enlazar a un apartado concreto, usa el ancla que genera el título:
  `[¿Cómo solicito vacaciones?](ausencias-y-vacaciones.md#como-solicito-vacaciones)`.

## Encabezados

- Un único `#` (el título del artículo).
- Un `##` por pregunta del índice, con el texto de la pregunta.
- `###` para subdividir una respuesta larga.
- **Nunca `####` o más**: con `toc_depth: 3` no aparecen en el índice de la página.

## Imágenes y recursos

- Van en `docs/docs_assets/`, con el mismo criterio de nombres (kebab-case sin tildes).
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
