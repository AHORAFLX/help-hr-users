# Estructura de archivos y navegación de este proyecto

Basado en `https://ayuda.ahora.es/help/1.0/GettingStarted/FileStructure/` y
`.../GettingStarted/VisualStructure/`, adaptado a lo que ya usa este repositorio
(revisa siempre `mkdocs.yml` y `docs/index.es.md` como fuente de verdad si hay
discrepancias con este documento).

## Dónde va cada artículo

```
docs/
  <Categoría>/
    <Título del artículo>.es.md   ← versión en español (obligatoria)
    <Título del artículo>.en.md   ← versión en inglés (opcional)
  docs_assets/
    images/<Producto o módulo>/...
```

- `<Categoría>` es una carpeta con **espacios y tildes reales** en el nombre (no
  guiones ni minúsculas forzadas). Ejemplos ya existentes en este proyecto:
  `Primeros pasos`, `Gestión de Empleados`, `Gestión del tiempo de trabajo`,
  `Ausencias y vacaciones`, `Gestión de Instancias`, `Nóminas y salarios`,
  `Otras funcionalidades`, `Integraciones`, `Informes`, `FAQ (HR)`, `Versiones`,
  `APP móvil`.
- Usa una categoría existente si el tema encaja; solo crea una carpeta nueva si el
  usuario lo pide o si ninguna categoría existente es razonable.
- `<Título del artículo>` es el nombre real del archivo (con espacios, tildes y
  mayúsculas tal cual se quiere mostrar), **siempre terminado en `.es.md`** para la
  versión en español. Ejemplo real del repo:
  `docs/Primeros pasos/Configuración Inicial Sebastian HR.es.md`.

## Registrar el artículo en `mkdocs.yml`

Este proyecto usa navegación **manual** (bloque `nav:` completo, no autogenerado).
Un archivo nuevo **no aparecerá en el menú** hasta que añadas su entrada ahí.

La ruta en `nav` se escribe **sin el sufijo de idioma** (el plugin `i18n` resuelve
`Archivo.md` → `Archivo.es.md` o `Archivo.en.md` según el idioma activo):

```yaml
nav:
  - Inicio: index.md
  - Primeros pasos:
    - Configuracion Inicial Sebastian HR: Primeros pasos/Configuración Inicial Sebastian HR.md
```

Reglas al editar `nav`:

- Añade tu entrada dentro de la categoría correspondiente, respetando la indentación
  de 4 espacios existente (`- Nombre: Ruta`).
- El texto antes de `:` es la etiqueta que se muestra en el menú (puede omitir tildes
  si sigues el estilo ya usado en algunas entradas del proyecto, pero es más correcto
  mantenerlas).
- La ruta después de `:` debe coincidir **exactamente** (mayúsculas, tildes, espacios)
  con el nombre real del archivo en `docs/`, cambiando solo `.es.md`/`.en.md` por `.md`.
- No reordenes ni reescribas entradas ya existentes; solo añade la tuya, en orden
  alfabético dentro de su categoría salvo que el usuario indique otro criterio.
- Si creas una categoría nueva, añádela como una nueva clave de nivel superior dentro
  de `nav`, después de `Inicio` y en el lugar que tenga más sentido temático.

## Enlaces internos entre artículos

Usa rutas relativas al archivo `.md` sin sufijo de idioma, igual que en
`docs/index.es.md`:

```markdown
[Configuración Inicial Sebastian HR](../Primeros%20pasos/Configuraci%C3%B3n%20Inicial%20Sebastian%20HR.md)
```

- Los espacios y caracteres acentuados en la URL pueden escribirse codificados
  (`%20`, `%C3%B3`...) como en los enlaces ya existentes, o sin codificar — MkDocs
  resuelve ambos, pero sé consistente con el resto del archivo que edites.
- Los enlaces son sensibles a mayúsculas/minúsculas y a los espacios exactos del
  nombre de archivo real.

## Imágenes y recursos

- Guarda las imágenes en `docs/docs_assets/images/<Producto o módulo>/`, creando la
  subcarpeta si no existe (actualmente `docs_assets/` está vacío en este proyecto).
- No modifiques nada dentro de `docs_assets/fh-structural/`, `stylesheets/fh-structural/`
  ni `javascripts/fh-structural/` — son recursos estructurales de la plantilla
  (marcados "NO MODIFICAR" en la guía oficial).
- Los estilos/scripts propios del proyecto van directamente en `docs/stylesheets/` y
  `docs/javascripts/` (fuera de `fh-structural/`), y se registran en `mkdocs.yml` bajo
  `extra_css`/`extra_javascript`, después del comentario
  `# Your project styles files here ↓` / `# Your project js files here ↓`.

## Carpetas que NO debes tocar

- `site/` — salida generada por `mkdocs build`, no se versiona a mano.
- `overrides/` — plantillas del tema, marcadas "NO MODIFICAR" en la guía oficial.
