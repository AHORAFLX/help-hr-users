# Asistente Tally para gastos

Tally es el asistente que te ayuda a rellenar un parte de gastos: le describes el
gasto o le mandas la foto del ticket, y él prepara el parte con sus líneas por ti.

!!! info "No todas las empresas lo tienen activado"
    Si tu empresa tiene activado el asistente de gastos, verás el botón **Nuevo
    parte** en el listado de **Gastos**. Si no lo ves, crea el parte a mano como se
    explica en [Gastos](gastos.md#como-registro-un-gasto-y-anado-lineas-al-gasto).

## ¿Cómo abro el asistente Tally?

En el listado de **Gastos**, pulsa **Nuevo parte**. Se abre el chat de Tally en el
lateral derecho, listo para que le mandes la información del gasto.

![Chat de Tally abierto en el lateral derecho del listado de Gastos, con su primer mensaje pidiendo los datos del gasto](../docs_assets/help-images/asistente-ia-tally-gastos-chat-inicial.png)

## ¿Cómo le doy los datos del gasto?

### Escribiendo o dictando el gasto

Describe el gasto en el chat, por ejemplo: _"Necesito registrar un gasto de gasolina
de 72,34€ del cliente QUALYPACK"_. Tally te pedirá los datos que le falten.

### Adjuntando el ticket o la factura

Manda la foto del ticket o el PDF de la factura y Tally la lee sola. Por ejemplo,
con este ticket de una gasolinera:

![Ticket de una gasolinera Repsol con la fecha, el producto, el importe y el número de ticket](../docs_assets/help-images/asistente-ia-tally-gastos-ticket-repsol.png)

Tally detecta datos como estos:

| Campo | Valor detectado |
| --- | --- |
| Proveedor | Repsol Solred / Campsa Estaciones |
| Fecha y hora | 25/06/2024, 18:40:31 |
| Concepto | Diesel e+ (44,96 litros) |
| Importe total | 72,34 € |
| Forma de pago | Pago móvil |
| N.º de ticket | 241770693609 |

### Los datos que necesita para crear el gasto

Sea cual sea la vía, Tally necesita estos datos para generar el parte. Si no los
saca de la foto, te los va preguntando uno a uno:

- Nombre del cliente.
- Fecha del gasto.
- Hora de inicio y fin del gasto.
- Si es facturable o no.
- Número de unidades.
- Precio por unidad.
- Precio total.
- Tipo de pago.
- Tipo de gasto.
- Número de personas.

!!! tip "Cuantos más datos le des a la primera, menos preguntas te hace"
    Si mencionas el cliente y el resto de datos al describir el gasto o al mandar la
    foto, Tally solo te preguntará lo que le falte por confirmar.

## Artículos relacionados

- [Gastos](gastos.md) — crear el parte a mano, añadir líneas y ver en qué estado está.
