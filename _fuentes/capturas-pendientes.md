# Capturas pendientes

Registro de las capturas de pantalla que faltan en los artículos. Cada marcador
`<!-- TODO:captura: ... -->` de `docs/` debe tener su fila aquí.

Para saber cuántas hay y dónde están en cada momento:

```bash
node _fuentes/scripts/check-docs.js
```

No se reutilizan las capturas de `Flexygo_HR.Frontend/wwwroot/emp/Help_Sebastian/`:
son de la interfaz anterior.

## Identificador de cada captura

Cada fila tiene un **fichero** ya decidido: el nombre exacto que debe tener la imagen
dentro de `docs/docs_assets/` cuando la incorpores. El mismo nombre está también en el
marcador `TODO:captura` del artículo, justo antes del guion:

```markdown
<!-- TODO:captura: home-cabecera-saludo-tarjetas.png · cabecera de la pantalla de inicio... -->
```

Guarda cada captura en `docs/docs_assets/` con ese nombre tal cual (kebab-case, sin
tildes, `.png`). En cuanto estén ahí, puedo localizarlas por nombre y sustituir cada
marcador por su `![...](../docs_assets/<fichero>)` sin más indicaciones. Si añades una
captura nueva que no esté en esta tabla, dale tú el nombre siguiendo el mismo patrón
(`<artículo>-<qué-muestra>.png`) y añade la fila.

| Artículo | Apartado | Fichero (`docs_assets/`) | Qué debe mostrar | Estado |
|---|---|---|---|---|
| `tus-paginas-personales/home` | ¿Qué veo en la home? / Tu saludo y tus dos tarjetas | `home-cabecera-saludo-tarjetas.png` | Cabecera de la pantalla de inicio con el saludo y las tarjetas **Mis instancias** y **Vacaciones y ausencias**, con el botón **+** desplegado | Pendiente |
| `tus-paginas-personales/home` | ¿Qué veo en el tablón de anuncios? | `home-tablon-anuncios.png` | Tablón de la pantalla de inicio con las píldoras de filtro y varias publicaciones de tipos distintos | Pendiente |
| `tus-paginas-personales/area-personal` | ¿Desde dónde veo o descargo mis documentos? | `area-personal-mis-documentos.png` | Bloque **Mis documentos** del **Área personal**, con las carpetas y su contador arriba y varias líneas de documento con los botones de ver y descargar | Pendiente |
| `tus-paginas-personales/area-personal` | ¿Cómo registro o consulto mis habilidades/competencias? | `area-personal-habilidades.png` | Panel de edición de **Habilidades**, con la lista de habilidades, los cinco círculos de nivel y la cruz roja para quitar una | Pendiente |
| `tus-paginas-personales/area-personal` | ¿Cómo veo mi planificación del mes? | `area-personal-calendario-mensual.png` | Calendario mensual del **Área personal** con varios turnos, un festivo y unos días de vacaciones | Pendiente |
| `tus-paginas-personales/area-personal` | ¿Qué son las evaluaciones de desempeño? | `area-personal-evaluacion-desempeno.png` | Detalle de una evaluación de desempeño con el tipo, la fecha, el resultado, **Evaluado por** y las preguntas con sus respuestas | Pendiente |
| `fichajes/fichar` | ¿Cómo ficho…? / En la oficina | `fichar-punto-de-acceso.png` | Pantalla del Punto de acceso con el teclado numérico y el campo de código | Pendiente |
| `fichajes/fichar` | ¿Cómo ficho…? / De viaje | `fichar-boton-fichaje-inicio.png` | Botón de fichaje de la pantalla de inicio | Pendiente |
| `fichajes/consulta-y-correcciones` | ¿Dónde veo el detalle de mis fichajes del mes? | `consulta-y-correcciones-jornada-laboral-mensual.png` | Listado mensual de **Jornada laboral**, una fila por día, con la columna de Progreso | Pendiente |
| `fichajes/consulta-y-correcciones` | ¿Cómo veo mis horas totales? | `consulta-y-correcciones-resumen-horas.png` | Resumen mensual: gráfico de porcentaje cumplido y desglose de horas | Pendiente |
| `fichajes/consulta-y-correcciones` | ¿Cómo veo la página de fichajes del día? | `consulta-y-correcciones-detalle-dia.png` | Ventana de detalle del día con la lista de fichajes de esa jornada | Pendiente |
| `fichajes/consulta-y-correcciones` | ¿Cómo reporto/corrijo un fichaje…? | `consulta-y-correcciones-formulario-modificacion.png` | Formulario de solicitud de modificación de fichaje, con el campo de comentario | Pendiente |
| `instancias-y-solicitudes/solicitud-seguimiento-y-validacion` | ¿Cómo envío una instancia/solicitud a RRHH? | `solicitud-seguimiento-y-validacion-menu-nueva-peticion.png` | Menú desplegable del botón **+** de la pantalla de inicio, con las opciones de nueva petición | Pendiente |
| `instancias-y-solicitudes/solicitud-seguimiento-y-validacion` | ¿Cómo veo el estado de mis solicitudes pendientes? | `solicitud-seguimiento-y-validacion-listado-instancias.png` | Listado de **Instancias** del empleado con las etiquetas de estado en color | Pendiente |
| `ausencias-y-vacaciones/solicitud-y-cancelacion` | ¿Cómo solicito vacaciones o ausencias? | `solicitud-y-cancelacion-formulario-nuevas-vacaciones.png` | Formulario **Nuevas vacaciones o ausencia** con los campos de tipo, fechas y razón | Pendiente |
| `ausencias-y-vacaciones/solicitud-y-cancelacion` | ¿Cómo solicito…? / Cómo leer el calendario | `solicitud-y-cancelacion-calendario-leyenda.png` | Calendario anual de **Ausencias y vacaciones** con el desplegable **Leyenda** abierto | Pendiente |
| `ausencias-y-vacaciones/consulta-de-totales` | ¿Cuántos días de vacaciones me quedan…? | `consulta-de-totales-resumen-total-vacaciones.png` | Resumen del total de vacaciones: bloques **Vacaciones**, **Ausencias** y **Detalle** | Pendiente |
| `ausencias-y-vacaciones/solicitud-y-cancelacion` | ¿Puedo eliminar unas vacaciones ya aprobadas? | `solicitud-y-cancelacion-formulario-cancelar-vacaciones.png` | Formulario **Cancelar vacaciones/ausencias** con el interruptor de todos los días entre fechas | Pendiente |
| `ausencias-y-vacaciones/solicitud-y-cancelacion` | ¿Puedo adjuntar documentos a una ausencia? | `solicitud-y-cancelacion-subir-documentos-ausencia.png` | Panel de detalle de un día de ausencia con **Subir documentos** y el contador **Documentos** | Pendiente |
| `planificacion-de-turnos/mi-planificacion` | ¿Cómo veo mi turno de esta semana o este mes? / Esta semana | `mi-planificacion-planificacion-semana.png` | Bloque **Planificación de la semana** de la pantalla de inicio, con una tarjeta por día y el día de hoy marcado | Pendiente |
| `planificacion-de-turnos/mi-planificacion` | ¿Cómo veo mi turno…? / Este mes | `mi-planificacion-calendario-mensual.png` | Calendario mensual de planificación del **Área personal**, con varios turnos y algún día de vacaciones | Pendiente |
| `planificacion-de-turnos/mi-planificacion` | ¿Qué es exactamente mi planificación? / Mi horario personal | `mi-planificacion-planificacion-exclusiva.png` | Pantalla **Planificación exclusiva** con los bloques **Horario personal** y **Turnos exclusivos** | Pendiente — **el artículo tampoco tiene todavía este apartado ni su marcador `TODO:captura`**; falta escribir el contenido antes de poder colocar la imagen |
| `mis-datos-laborales/mi-contrato` | ¿Cómo consulto mi contrato actual? | `mi-contrato-listado-contratos.png` | Listado de **Contratos** del **Área personal**, con el contrato **En curso** y alguno finalizado | Pendiente |
| `mis-datos-laborales/mi-contrato` | ¿Cómo consulto mi contrato actual? | `mi-contrato-detalle-contrato.png` | Detalle de un contrato con el bloque de datos laborales y el bloque **Salario** | Pendiente |
| `equipos-y-estructura-corporativa/mi-equipo` | ¿A qué equipo pertenezco? | `mi-equipo-listado-equipos.png` | Listado de **Equipos** del **Área personal**, con una tarjeta que muestre el nombre, el número de miembros y la lista de personas | Pendiente |
| `equipos-y-estructura-corporativa/mi-unidad-organizativa` | ¿Cómo veo el organigrama / estructura corporativa? | `mi-unidad-organizativa-estructura-corporativa.png` | Pantalla **Estructura corporativa** con varios niveles del organigrama desplegados | Pendiente |
| `vigilancia-de-la-salud/mis-vigilancias-de-salud` | ¿Cómo me apunto a una revisión médica? | `mis-vigilancias-de-salud-listado-vigilancia-salud.png` | Listado de **Vigilancia de la salud** con varias tarjetas, una **Activa** con el contador de plazas y otra **Cerrada** | Pendiente |
| `vigilancia-de-la-salud/mis-vigilancias-de-salud` | ¿Cómo consulto mis revisiones médicas y sus resultados/aptitud? | `mis-vigilancias-de-salud-listado-vigilancia-sanitaria.png` | Listado de **Vigilancia sanitaria** del **Área personal**, con varias líneas y las etiquetas de resultado en color | Pendiente |
| `cursos/cursos-y-certificaciones` | ¿Cómo veo los cursos a los que me he apuntado? | `cursos-y-certificaciones-listado-cursos.png` | Listado de **Cursos** del **Área personal**, con varias líneas y las etiquetas de estado en color | Pendiente |
| `cursos/cursos-y-certificaciones` | ¿Cómo me inscribo a un curso del catálogo? | `cursos-y-certificaciones-ficha-curso.png` | Ficha de un curso con el botón **Apúntate** resaltado y el bloque **Inscritos** a la derecha | Pendiente |
| `reservas-viajes-y-gastos/reservas` | ¿Cómo reservo un recurso de la empresa? | `reservas-calendario-reservas.png` | Pantalla de **Reservas** con la pestaña **Calendario de reservas** y los botones **Simple**, **Múltiple** y **Eliminar** abajo | Pendiente |
| `reservas-viajes-y-gastos/gastos` | ¿Cómo registro un gasto y añado líneas al gasto? | `gastos-detalle-parte-gastos.png` | Detalle de un parte de gastos con la cabecera arriba, las líneas debajo y el botón **Editar líneas** | Pendiente |
| `reservas-viajes-y-gastos/viajes` | ¿Cómo solicito un viaje de empresa? | `viajes-formulario-solicitud-viaje.png` | Formulario de solicitud de viaje con las fechas y las tres casillas de **Transporte**, **Hotel** y **Coche de alquiler** | Pendiente |
| `documentacion-y-comunicacion-con-la-empresa/documentacion` | ¿Dónde encuentro documentos generales de la empresa? | `documentacion-listado-documentacion.png` | Listado de **Documentación** con las categorías, sus carpetas y el número de documentos de cada una | Pendiente |
| `documentacion-y-comunicacion-con-la-empresa/documentacion` | ¿Cómo confirmo un documento? | `documentacion-confirmar-documento.png` | Documento de entrega obligatoria abierto, con el botón **Confirmar entrega** resaltado | Pendiente |
| `documentacion-y-comunicacion-con-la-empresa/buzon-de-sugerencias` | ¿Quién puede crear una sugerencia…? | `buzon-de-sugerencias-formulario-nueva-sugerencia.png` | Formulario de nueva sugerencia con el **Tipo**, el interruptor **Público** y el de **Sugerencia anónima** | Pendiente |
| `documentacion-y-comunicacion-con-la-empresa/noticias` | ¿Para qué se usan las noticias? | `noticias-listado-noticias.png` | Listado de noticias de una categoría, con una noticia sin leer, una ya leída y una destacada | Pendiente |
