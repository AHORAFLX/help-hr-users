---
name: crear-articulo-ayuda
description: Crea, amplía o corrige artículos de la documentación de usuario de Sebastian HR (sitio MkDocs Material basado en la plantilla ayuda.ahora.es/help). Aplica el estilo de redacción, la estructura de archivos/navegación, las fuentes de verdad del código y los componentes personalizados (fh-copy, fh-modal, fh-popover, flx-navbutton, fh-namepropagator, clases fh-*) de este proyecto. Úsala cuando el usuario pida escribir, redactar, editar, traducir o añadir un artículo/página a esta documentación.
---

# Crear artículos de ayuda (Sebastian HR)

Sitio MkDocs (tema Material) generado a partir de la plantilla de
`https://ayuda.ahora.es/help/1.0/`. Este repo tiene **convenciones propias** que
mandan sobre la guía genérica de la plantilla: la fuente de verdad es `mkdocs.yml`
y el temario `documentacion-indice-preguntas.md` (raíz del repo).

## Lo que hay que saber antes de escribir una sola línea

**Alcance: solo la ruta Empleado.** Este sitio documenta lo que una persona empleada
hace por sí misma. La configuración de Gestor/RRHH (tablas maestras, nóminas,
integraciones, informes de gestión) no entra. Si el artículo te lleva ahí, para y
pregunta.

**Estructura: una carpeta por categoría, uno o varios artículos dentro.** Cada
categoría del temario es una carpeta bajo `docs/`, y dentro va un artículo `.es.md`
por cada bloque temático de esa categoría (una categoría con un solo bloque tiene un
solo artículo). **Cada pregunta del índice es un apartado `##`** con el texto de la
pregunta, dentro del artículo de su bloque. No hay más capas que
categoría → artículo → pregunta.

**Fuentes: el código y la persona que mantiene la documentación. Nada más.** No se
deduce, no se rellena a ojo, no se copia de la ayuda antigua. Lo que no puedas
confirmar se queda como pregunta pendiente.

## Referencias

Cárgalas solo cuando las necesites (no las leas todas de golpe para una corrección
menor de texto):

- `reference/fuentes-de-verdad.md` — **léelo siempre antes de redactar contenido
  nuevo.** Qué ruta del código confirma cada cosa, categoría por categoría, y qué
  hacer cuando el código no contesta.
- `reference/estructura-proyecto.md` — **léelo siempre antes de crear un artículo.**
  Nombres de archivo, entrada en el `nav`, enlaces internos, niveles de encabezado.
- `reference/componentes-personalizados.md` — componentes propios de Ahora
  (`fh-copy`, `fh-modal`, `fh-popover`, `flx-navbutton`, `fh-namepropagator`) y clases
  CSS (`fh-title-with-image`, `fh-version-tag`, `link`, `button`, `video-wrapper`,
  `only-light`/`only-dark`, `no-language`). Léelo si el artículo necesita algo
  interactivo más allá de Markdown estándar.
- `reference/markdown-avanzado.md` — admonitions, pestañas, bloques de código,
  iconos Material, Mermaid, listas de definición. Léelo cuando necesites un aviso,
  pestañas o un diagrama.
- `templates/articulo.md` — esqueleto listo para copiar.

Como referencia de forma: `ejemplo-index.md` (raíz del repo) para la portada, y
`docs/fichajes.es.md` para el estilo de un artículo. Ojo: `ejemplo-index.md` es solo
un molde de estructura — su contenido es de Gestor/RRHH y su prosa va sin tildes;
la nuestra las lleva.

## Flujo de trabajo

1. **Identifica la categoría** en `documentacion-indice-preguntas.md` y sus preguntas.
   Esas preguntas son tus apartados `##`, con su texto tal cual.
2. **Lee `reference/fuentes-de-verdad.md`** y consulta el código que corresponde a esa
   categoría. Consulta también `_fuentes/glosario-ui.es.md` (cómo se llama cada cosa
   en pantalla) y `_fuentes/rutas-menu.md` (el recorrido de menú exacto).
3. **Lee `reference/estructura-proyecto.md`** para el nombre de archivo y la entrada
   del `nav`.
4. **Redacta** siguiendo `templates/articulo.md` y el estilo de abajo. Usa
   componentes o clases personalizados solo cuando aporten algo real.
5. **Añade la entrada en `mkdocs.yml`** dentro del `nav`, en el orden del temario (no
   alfabético). No reescribas el bloque: añade solo tu línea.
6. **Comprueba**: `node _fuentes/scripts/check-docs.js`.
7. **Entrega las preguntas pendientes** en una lista corta al final de tu respuesta.

## Estilo de redacción

- Español, tono directo, **dirigido a la persona empleada** que usa Sebastian HR —
  no a un desarrollador ni a quien administra el sistema. Segunda persona: "ficha
  desde el reloj", "consulta tus documentos".
- Un `#` con el título del artículo, igual que la etiqueta del `nav`.
- Párrafo introductorio corto: qué resuelve este artículo, antes del primer `##`.
- Un `##` por pregunta del temario, con el texto de la pregunta. `###` para
  subdividir una respuesta larga. **Nunca `####`**: con `toc_depth: 3` no sale en el
  índice de la página.
- Los pasos, en listas numeradas. Los requisitos o avisos importantes, en admonitions
  (`!!! info`, `!!! warning`, `!!! tip`).
- **Llama a las cosas como las llama la aplicación**, con el término de
  `_fuentes/glosario-ui.es.md`. Si la app dice "Jornada", el artículo dice "Jornada".
- Los recorridos de menú, en negrita y con `>`: **Gestión Mensual > Mis marcas**, con
  las etiquetas exactas de `_fuentes/rutas-menu.md`.
- Cierra con enlaces a artículos relacionados cuando tenga sentido.
- No repitas el título como un `##` justo debajo del `#`.

### Nivel de detalle: responde la pregunta y para

El error más fácil de cometer aquí es escribir de más. Investigar el código destapa
muchísimo detalle y **casi nada de eso le sirve a la persona empleada**. Criterio:

- **No expliques la configuración interna.** Si algo depende de cómo lo tenga montado
  cada empresa, basta con "según lo que tenga configurado tu empresa" y, si procede,
  "pregunta a Recursos Humanos". No enumeres las condiciones ni los parámetros.
- **No cuentes los procesos internos de Recursos Humanos** (reaperturas, jornadas
  sucias, recálculos, informes de gestión) salvo que el empleado tenga que hacer algo
  con ellos.
- **No reproduzcas listas de columnas o de campos** solo porque las hayas encontrado.
  Resume qué información verá.
- **No incluyas fórmulas de cálculo.** Di qué significa el dato, no cómo se computa.
- Si dudas entre dejar un párrafo o quitarlo, quítalo.

### Funcionalidad exclusiva de PRO

Marca el apartado afectado, no dupliques el artículo:

```markdown
## ¿Cómo veo mis horas totales? <span class="fh-version-tag" title="Solo disponible en modo PRO">PRO</span>
```

Qué es exclusivo de PRO se confirma en
`../Flexygo_HR.Processes/ApplicationMode.cs`, nunca de memoria.

### Capturas de pantalla

No tenemos capturas nuevas y no se inventan rutas de imagen. Donde haga falta una,
deja el marcador en su sitio exacto:

```markdown
<!-- TODO:captura: pantalla de fichaje con el botón de entrada resaltado -->
```

y añade la entrada a `_fuentes/capturas-pendientes.md`.

## Errores comunes a evitar

- Nombrar el archivo con espacios, tildes, mayúsculas o números
  (debe ser kebab-case: `mi-contrato-y-datos-laborales.es.md`).
- Enlazar con el sufijo de idioma (`fichajes.es.md`) en vez del nombre base
  (`fichajes.md`) — el plugin `i18n` resuelve el idioma.
- Olvidar la entrada en `nav`: sin ella el artículo no aparece en el menú aunque el
  archivo exista.
- Usar `####` o más para contenido que debería ser navegable desde el índice.
- Documentar como disponible un nodo marcado ⛔ **deshabilitado** en
  `_fuentes/rutas-menu.md`.
- Inventarse el nombre de una pantalla o de un campo en vez de sacarlo del glosario.
- Rellenar a ojo lo que el código no confirma, en lugar de dejarlo como pregunta.
- Añadir un componente personalizado (`fh-modal`, `fh-popover`…) sin revisar su
  sintaxis exacta en `reference/componentes-personalizados.md` — los atributos y el
  `id` del bloque asociado son estrictos.
