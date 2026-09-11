# Reservas, viajes y gastos

Aquí tienes las tres cosas que gestionas por tu cuenta cuando necesitas algo de la
empresa para trabajar: coger un recurso compartido, pasar los gastos que has
adelantado y pedir un viaje de trabajo.

## ¿Cómo reservo un recurso de la empresa (sala, vehículo, equipo…)?

Entra en **Reservas**, comprueba en el calendario que el recurso está libre y pulsa
**Simple**.

1. En el menú principal, en el apartado **Información**, entra en **Reservas**.
2. Mira la disponibilidad. La pantalla tiene dos pestañas:
   **Calendario de reservas**, con las reservas colocadas por franjas horarias, y
   **Timeline de reservas**, que dedica una línea a cada recurso. En las dos ves las
   reservas de toda la empresa, con el nombre del recurso y de quien lo tiene cogido.
3. Pulsa **Simple**.
4. Elige el **Recurso** y la **Fecha de reserva**, y acota la franja con la
   **Hora de inicio** y la **Hora de finalización**, o activa **Todo el día**. Si el
   recurso tiene tipos de reserva definidos, elige el que corresponda en **Tipo**.
5. Guarda.

<!-- TODO:captura: pantalla de Reservas con la pestaña Calendario de reservas y los botones Simple, Múltiple y Eliminar abajo -->

El **Estado** no lo rellenas tú: toda reserva nueva queda como **Activo**.

!!! warning "Dos reservas no pueden solaparse sobre el mismo recurso"
    Si alguien ya tiene ese recurso cogido en esa franja, la reserva no llega a
    guardarse y te avisa de que la fecha y la hora no están disponibles. Ojo con
    **Todo el día**: ocupa la jornada entera, así que choca con cualquier otra reserva
    de ese recurso ese día.

Pulsa cualquier reserva del calendario o del timeline para abrirla. Solo puedes
modificar las que has hecho tú.

### Reservar varios días de una vez

El botón **Múltiple** hace la misma reserva en todos los días de un periodo. Además del
recurso, el tipo y la franja horaria, te pide la **Fecha de reserva** y la
**Fecha de finalización de la reserva**, y te deja restringir los días: desactiva
**Todos los días de la semana** y elige cuáles en **Días de la semana**.

!!! note "Si un solo día da conflicto, no se guarda ninguno"
    Antes de crear nada comprueba el periodo entero. Si alguna fecha choca con otra
    reserva del mismo recurso, cancela la operación completa y te muestra la lista de
    días en conflicto para que ajustes las fechas y lo vuelvas a intentar.

También puedes repetir una reserva ya hecha: ábrela y busca **Repita las reservas** en
el menú de procesos de la barra superior. Ahí indicas cada cuánto se repite
(**Modo**), cuántas veces (**Cantidad**) y si quieres saltarte los fines de semana
(**Sin fin de semana**).

<!-- PENDIENTE: el combo Modo de "Repita las reservas" sale sin traducir al español (Daily / Weekly / Monthly) y el propio proceso se llama "Repita las reservas". ¿Lo documento tal cual, o lo dejo fuera hasta que se corrijan las etiquetas? -->

### Cancelar una reserva

Si todavía no ha empezado, puedes cancelarla tú:

- **Una reserva suelta**: ábrela desde el calendario o el timeline y pulsa
  **Cancelar** en la barra de botones. Te pide confirmación.
- **Varias a la vez**: en la pantalla de **Reservas**, pulsa **Eliminar**. Elige los
  recursos, el periodo entre la **Fecha de inicio** y la **Fecha Fin** y, si solo
  quieres cancelar algunos días, los **Días de la semana**.

!!! warning "Una reserva que ya ha empezado no se puede cancelar"
    Si la hora de inicio ya ha pasado, el botón te avisa de que la reserva ya ha
    comenzado y no hace nada. Habla con Recursos Humanos si necesitas liberarla.

La reserva cancelada desaparece del calendario y del timeline, y el recurso vuelve a
quedar libre en esa franja.

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
    después, pídelo con una [instancia](instancias-y-solicitudes.md).

En la lista solo aparecen tus partes: los gastos de tus compañeros no se ven.

<!-- PENDIENTE: en el listado de Gastos, los partes Transferido y Confirmado muestran un enlace "Cambiar a pagado" que no está restringido por rol. ¿Es algo que tenga que pulsar el empleado, o debería verlo solo Recursos Humanos? -->

## ¿Cómo solicito un viaje de empresa?

Entra en **Viajes** y pulsa el día en el que sales. Se abre el formulario de solicitud
con esa fecha ya puesta.

1. En el menú principal, en el apartado **Información**, entra en **Viajes**.
2. Verás un calendario anual con los viajes en los que participas. Pulsa un día libre.
3. Pon una **Descripción** del viaje y, si va asociado a alguien, el **Cliente**.
4. Ajusta la **Fecha de salida** y la **Fecha de llegada**.
5. Marca lo que necesitas que te reserven —**Transporte**, **Hotel**,
   **Coche de alquiler**— y escribe al lado los detalles de cada cosa: horarios que te
   vienen bien, categoría, número de plazas…
6. Usa **Comentarios** para el resto de la información del viaje.
7. Pulsa el botón de solicitud.

<!-- TODO:captura: formulario de solicitud de viaje con las fechas y las tres casillas de Transporte, Hotel y Coche de alquiler -->

!!! note "No puedes tener dos viajes solapados"
    Si ya tienes un viaje que pisa esas fechas, la solicitud no se guarda. Y la fecha
    de llegada no puede ser anterior a la de salida.

### Qué pasa después de solicitarlo

El viaje queda en estado **Abierto** y le llega un aviso, y un correo, a quien lleva los
viajes en tu empresa. A partir de ahí:

- Pulsa el viaje en el calendario para abrirlo. Arriba tienes las fechas, el cliente,
  el estado y lo que pediste en cada apartado.
- Según se vayan cerrando, aparecen las reservas concretas en los bloques de
  **Transporte**, **Hotel** y **Coche de alquiler**, con el tipo, las fechas y si es ida
  y vuelta.
- En **Compañeros de viaje** ves quién más va. Tú apareces desde el primer momento; al
  resto los añade quien gestiona el viaje.
- En **Documentos de viaje** puedes adjuntar lo que necesites y descargarte lo que
  hayan subido: billetes, reservas, justificantes.

Cuando el viaje se marca como **Cerrado** recibes un correo con toda la documentación
del viaje adjunta. Si al final no se hace, pasa a **Cancelado**.

<!-- PENDIENTE: el detalle del viaje trae un botón "Administrar". ¿Lo usa también quien ha solicitado el viaje (para completar sus reservas), o es solo para el responsable de viajes y no debería documentarse? -->

En el calendario solo salen los viajes que has pedido tú y aquellos en los que te han
incluido como compañero de viaje.

## Artículos relacionados

- [Instancias y solicitudes](instancias-y-solicitudes.md) — para pedir a Recursos
  Humanos lo que no puedes hacer tú, como corregir un parte de gastos ya enviado.
- [Fichajes](fichajes.md) — cómo fichar los días que estás de viaje.
- [Ausencias y vacaciones](ausencias-y-vacaciones.md) — un viaje de trabajo no es una
  ausencia: se piden por sitios distintos.
