# Fuentes de verdad por categoría

**Regla base: no se inventa nada.** Cada afirmación de un artículo sale de (a) el
código del repo `Flexygo_HR`, o (b) una respuesta explícita de la persona que
mantiene la documentación. Si no puedes confirmar un dato por ninguna de las dos
vías, no lo escribas: anótalo como pregunta pendiente y sigue.

Las rutas de esta página son relativas a la raíz del repo de producto
(`Flexygo_HR/`), que está **un nivel por encima** del repo de documentación
(`Docs_SebastianHR_Users/`). Desde aquí: `../Flexygo_HR.Processes/...`.

## Antes de escribir cualquier artículo

| Necesitas | Mira en |
|---|---|
| Cómo se llama algo en pantalla | `_fuentes/glosario-ui.es.md` |
| El recorrido de menú (`ve a X > Y`) | `_fuentes/rutas-menu.md` |
| Si algo es exclusivo del modo PRO | `../Flexygo_HR.Processes/ApplicationMode.cs` |

`_fuentes/rutas-menu.md` marca los nodos **deshabilitados** (⛔). No los documentes
como disponibles: no se ven en la aplicación.

## Fuentes transversales

| Qué | Ruta |
|---|---|
| Terminología es-ES | `../Flexygo_HR.Conf.Database/scripts/staticdata/translate.sql` |
| Árbol de menú | `.../staticdata/navigation_nodes.sql` |
| Pantallas y sus módulos | `.../staticdata/pages.sql`, `pages_modules.sql` |
| Pestañas/chips de las listas | `.../staticdata/objects_presets.sql` |
| Objetos y campos | `.../staticdata/objects.sql`, `objects_properties.sql` |
| Visibilidad por rol | `.../staticdata/security_navigation_nodes_roles.sql`, `security_pages_roles.sql` |
| Textos de avisos por correo | `.../staticdata/mails_templates.sql` |
| Reglas finas de datos | `../Flexygo_HR.Data.Database/dbo/{Tables,Views,Stored Procedures,Functions}` |

`../Flexygo_HR.Frontend/wwwroot/emp/hr-docs/modulos/*.md` son notas internas de
desarrollo: úsalas **solo para localizar rápido el código** de un módulo. Están
escritas para desarrollador y pueden estar desactualizadas — nunca copies su texto ni
te fíes de un dato sin verlo en el SQL o el C#.

## Por categoría

### `la-pantalla-de-inicio.es.md`

- `../Flexygo_HR.Processes/Board.cs` — tablón de anuncios
- `../Flexygo_HR.Processes/NewsNotices.cs`, `Notifications.cs`
- Menú: **Panel de control** (`General Dashboard`), **Hogar** (`Home`),
  **Noticias**, **Avisos** (`Notices`)

### `area-personal.es.md`

- `../Flexygo_HR.Processes/EmployeesDocuments.cs` — documentos del empleado y firma
- `../Flexygo_HR.Processes/PayrollRun.cs` — nómina y ajustes
- `../Flexygo_HR.Processes/Employees.cs` — ficha, habilidades
- Objetos: `HR_Employees_Documents`, `HR_EmployeesDocuments_SignerConf`, `Skill*`
- Menú: **Área personal** (`My Space`), **Nómina y ajustes**, **Habilidades**,
  **Planificación exclusiva**, **Documentos**

### `instancias-y-solicitudes.es.md`

- `../Flexygo_HR.Processes/Instances.cs`
- `../Flexygo_HR.Processes/WebAPIProcesses/Instances.cs`
- Objetos: `Instances`, `HR_Instances_Requests`; tipos y estados en
  `.../staticdata/` (`Instances Types`, `Instances Status`,
  `Instances Validation Types`)
- Quién valida: `ResponsableId` / `LeaderId` / `SupervisorId` en `Teams` / `Groups`
- Menú: **Instancias**, **Solicitudes** (`Requests`)

### `fichajes.es.md`

- `../Flexygo_HR.Processes/Markings.cs`, `AccessPoint.cs`
- `../Flexygo_HR.Processes/WebAPIProcesses/Markings.cs` — fichaje desde la APP
- Informes: `Reporting/FichajesReport.cs`, `JornadasReport.cs`,
  `LibroRegistroJornadaReport.cs`, `TrazabilidadFichajesReport.cs`,
  `MarkingsDeviationReport.cs`, `MonthlyHoursReport.cs`, `HorasExtraReport.cs`
- Tablas: `Markings`, `MarkingsPair`, `MarkingsTerminal`
- **PRO**: horas extra y bolsa de horas (presets `hr_prst_Balance` y `Overtime`)
- Menú: **Gestión Mensual** (`Workday`), **Reloj** (`Clock`),
  **Mis marcas** (`My Markings`)

### `ausencias-y-vacaciones.es.md`

- `../Flexygo_HR.Processes/Holidays.cs`, `TotalHolidays.cs`, `BankHolidays.cs`,
  `Balances.cs`, `HistoricalRecalc.cs`
- Informes: `Reporting/SaldosVacacionesReport.cs`, `AbsenceDetailReport.cs`,
  `AbsenceHoursReport.cs`, `CalendarioAusenciasGrupoReport.cs`, `LeavesReport.cs`
- Menú: **Ausencias y vacaciones**, **Mis vacaciones y ausencias**, **Bajas** (`Leaves`)
- ⛔ Ojo: **Vacaciones** y **Ausencias** del menú de "Mi espacio" están
  deshabilitados; la entrada activa es **Ausencias y vacaciones**

### `planificacion.es.md`

- `../Flexygo_HR.Processes/Shifts.cs`, `PlanificationsPatterns.cs`,
  `EmployeesSchedule.cs`, `GroupsSchedule.cs`
- `../Flexygo_HR.Processes/WebAPIProcesses/Shifts.cs`
- Informes: `Reporting/PlanificacionEmpleadosReport.cs`, `HorasTurnoSemanaReport.cs`,
  `MonthlyHoursReport.cs`
- Menú: **Planificación exclusiva**, **Cuadrantes**, **Contadores de horas**

### `mi-contrato-y-datos-laborales.es.md`

- `../Flexygo_HR.Processes/Contracts.cs`, `Employees.cs`
- Informes: `Reporting/ContratosVigentesReport.cs`,
  `ContratosProximosVencerReport.cs`, `PeriodosPruebaVencerReport.cs`,
  `AntiquityReport.cs`
- **PRO**: reglas avanzadas de convenio (`emp_Collective_Agreement`)
- Menú: **Contratos**

### `equipos-y-estructura-corporativa.es.md`

- `../Flexygo_HR.Processes/Employees.cs`, `GroupsSchedule.cs`
- Tablas `Teams` y `Groups`: el responsable sale de
  `ResponsableId` / `LeaderId` / `SupervisorId`, **no** de un campo en la ficha
- Informes: `Reporting/EstructuraPlantillaReport.cs`, `DirectorioEmpleadosReport.cs`
- Menú: **Equipos** (`Teams`), **Unidades organizativas**, **Estructura corporativa**

### `vigilancia-de-la-salud.es.md`

- `../Flexygo_HR.Processes/HealthSurveillances.cs`
- Informe: `Reporting/VigilanciasSaludReport.cs`
- Menú: **Vigilancia sanitaria** (`Health Surveillance`) en "Mi espacio" y
  **Vigilancia de la salud** (`Health Surveillances`) en la barra principal

### `cursos-y-certificaciones.es.md`

- `../Flexygo_HR.Processes/CloneCourses.cs`
- `../Flexygo_HR.Processes/WebAPIProcesses/Courses.cs`
- Informes: `Reporting/CursosAsistentesReport.cs`, `HistorialFormacionReport.cs`
- **PRO**: certificados de curso (propiedad `CertificateId`)
- Menú: **Cursos**, **Certificaciones**

### `reservas-viajes-y-gastos.es.md`

- `../Flexygo_HR.Processes/Reserves.cs`, `Expenses.cs`, `Travels.cs`
- `../Flexygo_HR.Processes/WebAPIProcesses/Reserves.cs`, `Expenses.cs`
- Menú: **Reservas** (`Reserves`), **Gastos**, **Viajes** (`Travels`)

### `noticias-documentacion-y-comunicacion.es.md`

- `../Flexygo_HR.Processes/NewsNotices.cs`, `EmployeesDocuments.cs`,
  `SuggestionsMailbox.cs`, `Notifications.cs`, `Board.cs`
- `../Flexygo_HR.Processes/WebAPIProcesses/News.cs`, `Suggestions.cs`
- Visibilidad por categoría: objetos `HR_*_Categories_*_Access`
- Menú: **Noticias**, **Documentación**, **Comunicación**

## Cuando el código no contesta

Hay preguntas del temario que el código no puede responder: por qué existe una
funcionalidad, qué confunde a la gente, qué conviene destacar. Para esas:

1. Escribe el resto del artículo.
2. Deja el apartado marcado con
   `<!-- PENDIENTE: pregunta concreta para la persona que mantiene la doc -->`.
3. Reúne todas las preguntas del artículo al final de tu respuesta, en una lista
   corta y concreta. No las inventes ni las rellenes a ojo.
