# Componentes y clases personalizadas de Ahora

Fuente: `https://ayuda.ahora.es/help/1.0/Components/CustomComponents/` y
`.../Components/CustomClasses/`. Todos estos componentes ya están registrados en
`mkdocs.yml` (`extra_css`/`extra_javascript`) en este proyecto — no hace falta añadir
nada de configuración, solo usar la sintaxis en el Markdown del artículo.

Úsalos solo cuando aporten valor real al artículo (interactividad, mostrar/ocultar
contenido largo, un botón que navega a una pantalla de Flexygo, etc.), no como
decoración.

## Componentes (etiquetas HTML personalizadas)

### `fh-copy` — copiar texto al portapapeles

```html
<fh-copy>Mi texto</fh-copy>
```

Al hacer clic copia el contenido y muestra una confirmación. Sin clase aplica el
estilo de enlace por defecto; se le puede añadir cualquier clase CSS (p. ej. `button`).

### `fh-modal` — contenido emergente (código largo, imágenes, etc.)

```html
<fh-modal class="button" modal_id="fhmodal_Mi_Id" modal_title="Mi título">Mi texto</fh-modal>

...

```js { #fhmodal_Mi_Id }
console.log("test");
```
```

- `modal_id`: debe coincidir con el `id` (`{ #fhmodal_Mi_Id }`) del bloque de
  contenido que se mostrará en el modal. **El id del bloque tiene que empezar por
  `fhmodal_`** para permanecer oculto hasta que se abra el modal.
- `modal_title`: título mostrado en la cabecera del modal.
- Coloca siempre el bloque de contenido del modal **al final de la página**.

### `fh-popover` — imagen en popover o tooltip

```html
<fh-popover class="button" mode="tooltip" src="../docs_assets/images/mi-imagen.png">Mi texto</fh-popover>
```

- `mode`: `"tooltip"` (al pasar el ratón) o `"popover"` (al hacer clic).
- `src`: ruta de la imagen, que debe estar guardada en `docs_assets`.

### `flx-navbutton` — botón que abre una pantalla de Flexygo

```html
<flx-navbutton class="button" type="openpage" pagetypeid="list" objectname="RedSys_Settings" showprogress="false">Configuración de RedSys</flx-navbutton>
```

- Los atributos (`type`, `pagetypeid`, `objectname`, `showprogress`, etc.) son los
  mismos que un `flx-navbutton` normal de Flexygo: **puedes copiar uno directamente
  desde Flexygo con sus atributos tal cual** y funcionará sin cambios.
- Se adapta automáticamente según si la ayuda se abre desde dentro de Flexygo o desde
  `docs.flexygo.com`.

### `fh-namepropagator` — input que sustituye texto en la página

```html
<fh-namepropagator selector="mi_clase" placeholder="Texto inicial"></fh-namepropagator>

Esto se reemplazará por el valor del input → <span class="mi_clase"></span> ← aquí también

```js { .mi_clase }
Esto se reemplazará por el valor del input → fhnamepropagator ← aquí también
```
```

- `selector`: clase CSS de los elementos cuyo texto se sustituirá por el valor del
  input.
- `placeholder`: texto inicial del input.
- El valor persiste entre recargas (se guarda en almacenamiento local).
- Dentro de bloques de código, marca el punto exacto a sustituir escribiendo
  literalmente `fhnamepropagator`.

## Clases CSS personalizadas

### `fh-title-with-image` — icono/imagen junto a un título

```markdown
# Paco { .fh-title-with-image }

![Ahora ERP](../docs_assets/images/AhoraERP/ahora.svg){ .fh-image-of-title }
```

Requiere combinar la clase en el encabezado con `.fh-image-of-title` en la imagen que
lo acompaña, justo debajo.

### `fh-version-tag` — etiqueta de "disponible desde la versión X"

```markdown
## Mi funcionalidad <span class="fh-version-tag" title="Disponible desde la versión 8.5">8.5+</span>
```

Si es el **primer encabezado** de la página, usa el `title` del front matter para el
nombre que aparece en el menú lateral (evita que la etiqueta de versión se cuele en
la navegación):

```markdown
---
title: WhatsApp
---

# Mi funcionalidad <span class="fh-version-tag" title="Disponible desde la versión 8.5">8.5+</span>
```

### `link` — texto con apariencia de enlace

```markdown
Mi texto <span class="link">el enlace</span> continúa mi texto
```

### `button` — texto con apariencia de botón

```markdown
<span class="button">El botón</span>
```

También se puede combinar con los componentes de arriba, p. ej. `<fh-copy class="button">...`.

### `video-wrapper` — vídeo de YouTube responsive

```html
<div class="video-wrapper">
    <iframe src="URL_DE_INCRUSTACION" title="Reproductor de vídeo de YouTube" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
</div>
```

Importante: `src` debe ser la URL de **incrustación** ("embed") de YouTube, no la URL
normal del vídeo.

### `only-light` / `only-dark` — imagen distinta según el tema

```markdown
![](/ruta/imagen.png#only-light "Descripción"){data-gallery="light"}
![](/ruta/imagen.png#only-dark "Descripción"){data-gallery="dark"}
```

`data-gallery="light"`/`"dark"` evita que el visor de galería permita navegar entre
la imagen oculta y la visible.

### `no-language` — bloque de código sin etiqueta de lenguaje

````markdown
```js { .no-language }
mycode();
```
````

Oculta la etiqueta de lenguaje ("JavaScript", etc.) que normalmente aparece en la
cabecera del bloque de código.
