# `_fuentes/` — material de apoyo para escribir la documentación

Esta carpeta está **fuera de `docs/`** a propósito: mkdocs no la publica. Contiene lo
que hace falta para escribir artículos correctos sin tener que rebuscar cada vez en
los SQL de `staticdata` (`translate.sql` son 11 MB).

## Generados por script — no editar a mano

| Fichero | Qué contiene | Se regenera con |
|---|---|---|
| `glosario-ui.es.md` | Terminología es-ES de la interfaz (menús, campos, botones) | `node _fuentes/scripts/extract-glosario.js` |
| `rutas-menu.md` | Árbol de menú del empleado con las etiquetas es-ES resueltas | `node _fuentes/scripts/extract-rutas-menu.js` |

Ambos salen de `../Flexygo_HR.Conf.Database/scripts/staticdata/`. Vuelve a
ejecutarlos cuando cambie la navegación o las traducciones del producto.

## Mantenidos a mano

| Fichero | Qué contiene |
|---|---|
| `capturas-pendientes.md` | Las capturas que faltan en los artículos |

## Scripts

| Script | Para qué |
|---|---|
| `scripts/extract-glosario.js` | Genera `glosario-ui.es.md` |
| `scripts/extract-rutas-menu.js` | Genera `rutas-menu.md` |
| `scripts/check-docs.js` | Verifica el sitio (nav, nombres, enlaces, encabezados, capturas) |
| `scripts/lib/flexygo-seed.js` | Parsea los SQL de `staticdata` (JSON troceado en literales `N'...'`) |

Solo necesitan Node, sin dependencias.
