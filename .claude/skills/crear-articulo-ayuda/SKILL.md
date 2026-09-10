---
name: crear-articulo-ayuda
description: Crea, amplía o corrige artículos de la documentación de ayuda de Sebastian HR (sitio MkDocs Material basado en la plantilla ayuda.ahora.es/help). Aplica el estilo de redacción, la estructura de archivos/navegación y los componentes personalizados (fh-copy, fh-modal, fh-popover, flx-navbutton, fh-namepropagator, clases fh-*) de este proyecto. Úsala cuando el usuario pida escribir, redactar, editar, traducir o añadir un artículo/página a esta documentación.
---

# Crear artículos de ayuda (Sebastian HR)

Este proyecto es un sitio MkDocs (tema Material) generado a partir de la plantilla de
`https://ayuda.ahora.es/help/1.0/`. Antes de escribir contenido, ten en cuenta que este
repo **ya tiene convenciones propias** (ver `mkdocs.yml` y `docs/index.es.md`) que hay que
respetar además de la guía genérica de la plantilla.

Carga los archivos de `reference/` solo cuando los necesites (evita leerlos todos de golpe
si la tarea es simple, p. ej. una corrección menor de texto):

- `reference/estructura-proyecto.md` — dónde va cada archivo, cómo nombrarlo y cómo
  registrarlo en el `nav` de `mkdocs.yml`. **Léelo siempre antes de crear un artículo nuevo.**
- `reference/componentes-personalizados.md` — componentes propios de Ahora
  (`fh-copy`, `fh-modal`, `fh-popover`, `flx-navbutton`, `fh-namepropagator`) y clases CSS
  personalizadas (`fh-title-with-image`, `fh-version-tag`, `link`, `button`, `video-wrapper`,
  `only-light`/`only-dark`, `no-language`). Léelo cuando el artículo necesite algo interactivo
  más allá de Markdown estándar.
- `reference/markdown-avanzado.md` — sintaxis de admonitions, pestañas, bloques de código
  avanzados, iconos Material, Mermaid, listas de definición, etc. (soportado vía
  `markdown_extensions` en `mkdocs.yml`). Léelo cuando necesites un aviso, pestañas de
  código, un diagrama, etc.
- `templates/articulo.md` — esqueleto de artículo listo para copiar y rellenar.

## Flujo de trabajo

1. **Aclara el encaje del artículo** si no es obvio: título, categoría del menú (una de las
   ya existentes en `mkdocs.yml` → `nav`, o una nueva), e idioma(s) (español obligatorio,
   inglés opcional). No asumas una categoría nueva si ya existe una razonable.
2. **Lee `reference/estructura-proyecto.md`** para resolver la ruta del archivo, el nombre
   exacto y la entrada de `nav` correspondiente.
3. **Redacta el contenido** siguiendo `templates/articulo.md` como esqueleto y las
   convenciones de estilo de abajo. Solo usa componentes/clases personalizados cuando
   aporten algo real (ver referencias) — no los fuerces.
4. **Actualiza `mkdocs.yml`** añadiendo la entrada correspondiente dentro del bloque `nav`
   existente, en la categoría correcta y en orden alfabético dentro de ella (a menos que el
   usuario pida otro orden). No reescribas el bloque `nav` completo: añade solo tu línea.
5. **Verifica enlaces internos**: deben ser relativos, apuntar al archivo `.md` (sin sufijo
   de idioma) y respetar mayúsculas/minúsculas y espacios exactos del nombre real del
   archivo (ver ejemplos en `docs/index.es.md`).
6. Si el usuario tiene el servidor local corriendo (`mkdocs serve`), recuérdale que el
   navegador se recarga solo; si no, no es necesario levantarlo para escribir el artículo.

## Estilo de redacción (observado en `docs/index.es.md` y la guía de la plantilla)

- Español, tono directo e instructivo, dirigido a la persona usuaria/administradora de RRHH
  que configura o usa Sebastian HR — no a un desarrollador.
- Un **H1** (`#`) con el título del artículo, igual (o muy parecido) al texto usado en la
  entrada del `nav`.
- Párrafo introductorio corto explicando qué es y para qué sirve la funcionalidad, antes del
  primer `##`.
- Estructura el cuerpo con `##` y `###`: son los únicos niveles que aparecen en el
  submenú/TOC de la página. No uses `####` para pasos que el lector deba poder saltar a través
  del índice.
- Pasos de configuración como listas numeradas; requisitos previos o notas importantes como
  admonitions (`!!! note`, `!!! warning`, `!!! tip`) — ver `reference/markdown-avanzado.md`.
- Capturas de pantalla con `![texto alternativo](ruta "título opcional")`, guardadas en
  `docs/docs_assets/images/<Producto o módulo>/...` (crea subcarpetas si no existen).
- Cierra artículos largos con enlaces a artículos relacionados cuando tenga sentido, con la
  misma sintaxis de enlace relativo usada en `docs/index.es.md`.
- No repitas manualmente el título del artículo como un `##` justo debajo del `#`.

## Errores comunes a evitar

- Nombrar el archivo sin el sufijo `.es.md` (o `.en.md` para la versión en inglés).
- Enlazar a un artículo usando el sufijo de idioma (`Archivo.es.md`) en vez del nombre base
  (`Archivo.md`) — el plugin `i18n` resuelve el idioma automáticamente.
- Olvidar añadir la entrada en `nav` dentro de `mkdocs.yml` (si no está en `nav`, MkDocs con
  navegación manual no la mostrará en el menú aunque el archivo exista).
- Usar `####` o más para contenido que debería ser navegable desde el submenú.
- Añadir un componente personalizado (`fh-modal`, `fh-popover`, etc.) sin revisar antes su
  sintaxis exacta en `reference/componentes-personalizados.md` — los atributos y el `id` del
  bloque asociado son estrictos.
