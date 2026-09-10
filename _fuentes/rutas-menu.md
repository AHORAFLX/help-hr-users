# Rutas de menu del empleado

> Generado por `_fuentes/scripts/extract-rutas-menu.js`. No editar a mano.
> Fuentes: `navigation_nodes.sql` + `translate.sql` (es-ES) del repo `Flexygo_HR`.

Usa **siempre** la etiqueta en negrita para escribir un recorrido en un articulo
(`ve a Fichajes > Mi jornada`). Si un nodo aparece como `sin traduccion es-ES`,
la aplicacion lo muestra en ingles: escribelo tal cual y avisa de la incidencia.

Los nodos marcados como ⛔ **deshabilitado** no se ven en la aplicacion:
no los documentes como disponibles.

Quedan fuera a proposito los subarboles de configuracion de Gestor/RRHH:
`Maintenance`, `Otros` / `Other`, `Tablas Maestras` y `Security`.

## Barra de navegacion principal del empleado

Raiz: `Employee Nav Bar` · NodeId `0ED1F46B-3832-445A-8129-A1AE75AB606F`

- **Panel de control** — original: `General Dashboard` · tipo: `page`
- **Gestión Mensual** — original: `Workday` · tipo: `page`
- **Compañía** — original: `Company` · tipo: `text`
- **Empleados** — original: `Employees` · tipo: `object` · vista: `list`
- **Empleados** — original: `Employees` · tipo: `page` · vista: `list`
- **Equipos** — tipo: `object` · vista: `list`
- **Estructura corporativa** — original: `Corporate structure` · tipo: `page`
- **Unidad organizativa** — original: `Organizational Unit` · tipo: `object` · vista: `list`
- **Contratos** — tipo: `object` · vista: `list`
- **Contratos** — original: `Contracts` · tipo: `page`
- **Información** — original: `Information` · tipo: `text`
- **Noticias** — original: `News` · tipo: `object` · vista: `list`
- **Documentación** — original: `Documentation` · tipo: `object` · vista: `list`
- **Cursos** — tipo: `object` · vista: `list`
- **Reservas** — original: `Reserves` · tipo: `page`
- **Gastos** — tipo: `object` · vista: `list`
- **Solicitudes** — original: `Requests` · tipo: `page` · vista: `edit`
- **Viajes** — original: `Travels` · tipo: `object` · vista: `list`
- **Comunicación** — original: `Communication` · tipo: `object` · vista: `list`
- **Vigilancia de la salud** — original: `Health Surveillances` · tipo: `object` · vista: `list`
- **Evaluaciones de desempeño** — tipo: `object` · vista: `list`
- **Control del tiempo** — original: `Time control` · tipo: `text`
- **Planificación de empleados** — original: `Employees Planification` · tipo: `page`
- **Cuadrantes** — original: `Quadrants` · tipo: `page`
- **Balances** — tipo: `object` · vista: `list`
- **Ejecución de nómina** — original: `Payroll Run` · tipo: `page`
- **Ausencias de empleados** — original: `Employees Absences` · tipo: `page`
- **Gestión de horas extras** — original: `Overtime Management` · tipo: `page`
- **Bolsa de horas** — original: `Bag Hours` · tipo: `object` · vista: `list`
- **Contadores de horas** — original: `Hours counters` · tipo: `page`
- **Mis vacaciones y ausencias** — original: `My holidays and absences` · tipo: `page` · vista: `list`

## Menu de "Mi espacio" (My Space)

Raiz: `EmployeeSpaceMenu` · NodeId `03CE6E45-9B23-4006-89A4-FB61CE877E88`

- **Ausencias y vacaciones** — original: `Absences and Holidays` · tipo: `page`
- **Vacaciones** — original: `Holidays` · tipo: `page` · ⛔ **deshabilitado**
- **Ausencias** — original: `Absences` · tipo: `page` · ⛔ **deshabilitado**
- **Bajas** — original: `Leaves` · tipo: `page`
- **Instancias** — original: `Instances` · tipo: `page`
- **Sanciones** — original: `Sanctions` · tipo: `page`
- **Contratos** — original: `Contracts` · tipo: `object` · vista: `list`
- **Contratos** — original: `Contracts` · tipo: `page`
- **Equipos** — original: `Teams` · tipo: `page`
- **Unidades organizativas** — original: `Organizational Units` · tipo: `page`
- **Dispositivos** — original: `Devices` · tipo: `page`
- **Vigilancia sanitaria** — original: `Health Surveillance` · tipo: `page`
- **Cursos** — original: `Courses` · tipo: `page`
- **Certificaciones** — original: `Certifications` · tipo: `page`
- **Habilidades** — original: `Skills` · tipo: `page`
- **Evaluaciones de desempeño** — original: `Performance Evaluations` · tipo: `page`
- **Evaluaciones de mi equipo** — original: `My Team Evaluations` · tipo: `page` · vista: `list`
- **Planificación exclusiva** — original: `Exclusive Planning` · tipo: `page`
- **Nómina y ajustes** — original: `Payroll and Adjustments` · tipo: `page`

## Barra de navegacion de la APP movil

Raiz: `APP Employee Nav Bar` · NodeId `9BA54AD7-00B5-49F9-84A8-FA4BEC31BC6B`

- **Reloj** — original: `Clock` · tipo: `page`
- **Mis marcas** — original: `My Markings` · tipo: `page`
- **Calendario** — original: `Calendar` · tipo: `text`
- **Documentos** — original: `Documents` · tipo: `page`

## Menu principal de la APP movil

Raiz: `HR_Mobile_MainMenu` · NodeId `0D8AF711-204A-43BA-BBCF-2AF397174ADD`

- **Hogar** — original: `Home` · tipo: `process` · vista: `generic`
- **Área personal** — original: `My Space` · tipo: `page`
- **Noticias** — original: `News` · tipo: `page`
- **Avisos** — original: `Notices` · tipo: `wc`
- **Logout** — **sin traduccion es-ES** · tipo: `process`

## Entradas de primer nivel (framework base)

Cuelgan de un nodo que no forma parte del addon de HR.

- **Barra de navegación HHRR** — original: `HHRR Nav Bar` · tipo: `group`
- **Cerrar sesión móvil** — original: `LogOut movil` · tipo: `process`
- **Hogar** — original: `Home` · tipo: `process` · vista: `generic`
- **Toggle full screen** — **sin traduccion es-ES** · tipo: `process`
- **Avisos** — original: `Notices` · tipo: `wc`
- **Área personal** — original: `My Space` · tipo: `page`
- **Cambiar al modo LITE** — original: `Change to LITE Mode` · tipo: `process`
- **History** — **sin traduccion es-ES** · tipo: `process` · vista: `generic`
- **Actualizar al modo PRO** — original: `Upgrade to PRO mode` · tipo: `process`
- **Noticias** — original: `News` · tipo: `page`
- **AyudaInicio** — original: `HelpHome` · tipo: `page` · ⛔ **deshabilitado**
- **Ayuda** — original: `Help` · tipo: `help` · ⛔ **deshabilitado**
- **Asistente de datos de prueba** — original: `Test data wizard` · tipo: `page`
