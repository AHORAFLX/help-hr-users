# Gastos

Los gastos que adelantas trabajando —comidas, kilómetros, peajes, alojamiento— se
pasan a la empresa desde **Gastos**.

En este artículo verás cómo crear un parte de gastos, cómo añadirle las líneas y los
tickets, y cómo saber en qué estado está.

## ¿Cómo registro un gasto y añado líneas al gasto?

Un gasto en Sebastian HR es un **parte**: una cabecera con el día, el cliente y el
horario, y dentro una línea por cada concepto que quieras cobrar. Primero creas el
parte y después le añades las líneas.

1. En el menú principal, en el apartado **Información**, entra en **Gastos**.
2. Pulsa el botón de nuevo registro.
3. Rellena la cabecera: el **Cliente**, la **Fecha**, la **Hora de inicio** y la
   **Hora de finalización**. Deja marcado **Facturable** si el gasto se le repercute al
   cliente, y usa el **Comentario** para explicar de qué va el parte.
4. Guarda. Se abre el parte, todavía sin líneas.
5. Pulsa **Editar líneas**. Se abre una rejilla donde vas añadiendo una línea por
   concepto con su **Tipo de gastos**, la **Descripción**, el
   **Número del Documento** del ticket, la **Cantidad de personas**, las
   **Unidades**, el **Importe unitario** y el **Importe total**, el **Tipo de pago** y
   si tienes **Factura**.
6. Guarda la rejilla.

<!-- TODO:captura: detalle de un parte de gastos con la cabecera arriba, las líneas debajo y el botón Editar líneas -->

Los tipos de gasto salen del catálogo que tenga montado tu empresa: comida,
kilómetros, peajes, aparcamiento, alojamiento, etc. Algunos ya llevan un importe por
unidad fijado, como el precio por kilómetro, y se calculan solos al poner las unidades.

El parte muestra la suma de todas sus líneas, y en el listado de **Gastos** ves esa
misma suma en la columna **Total**.

### Adjuntar los tickets y las facturas

Cada línea tiene un icono de clip a la derecha, con el número de documentos que ya
lleva. Pulsa ahí para subir la foto del ticket o el PDF de la factura de esa línea
concreta. El parte entero también admite documentos, y en la cabecera ves el recuento
en **Archivos adjuntos**.

!!! tip "Puedes crear el parte a partir de una foto del ticket"
    Si tu empresa tiene activado el asistente de gastos, el listado de **Gastos** trae
    el botón **Nuevo parte**: le mandas la foto de la factura o le describes el gasto
    por texto y él crea el parte con sus líneas y engancha la imagen.

<!-- PENDIENTE: el botón "Nuevo parte" con asistente depende de que la empresa tenga configurada la integración. ¿Se documenta o se deja fuera de la ayuda de usuario? -->

### En qué estado está tu parte

En el listado de **Gastos** tienes una pestaña por estado, y cada parte muestra el
suyo:

| Estado | Qué significa |
|---|---|
| **Generado** | Lo acabas de crear. Es el único momento en el que puedes tocarlo. |
| **Transferido** | Ya ha salido hacia la gestión del gasto. |
| **Confirmado** | Recursos Humanos lo ha dado por bueno. |
| **Pagado** | El importe ya te lo han abonado. |
| **Cancelado** | El parte se ha anulado. |

!!! warning "Solo puedes modificar el parte mientras está **Generado**"
    En cuanto sale de ese estado, los botones de editar y eliminar dejan de estar
    disponibles, tanto en el parte como en sus líneas. Si necesitas corregir algo
    después, pídelo con una
    [instancia](../instancias-y-solicitudes/solicitud-seguimiento-y-validacion.md).

En la lista solo aparecen tus partes: los gastos de tus compañeros no se ven.

<!-- PENDIENTE: en el listado de Gastos, los partes Transferido y Confirmado muestran un enlace "Cambiar a pagado" que no está restringido por rol. ¿Es algo que tenga que pulsar el empleado, o debería verlo solo Recursos Humanos? -->

## Artículos relacionados

- [Viajes](viajes.md) — cómo solicitar un viaje de empresa.
- [Reservas](reservas.md) — cómo coger una sala, un vehículo o un equipo.
- [Solicitud, seguimiento y validación](../instancias-y-solicitudes/solicitud-seguimiento-y-validacion.md) —
  para pedir a Recursos Humanos lo que no puedes hacer tú, como corregir un parte de
  gastos ya enviado.
