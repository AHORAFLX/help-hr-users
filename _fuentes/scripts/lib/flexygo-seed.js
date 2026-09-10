'use strict';

const fs = require('fs');

// Los scripts de staticdata de Flexygo guardan su carga como un JSON troceado en
// literales `N'...'` concatenados, entre `DECLARE @DATA` y el `MERGE INTO` final.
// Los cortes entre trozos caen en cualquier punto, incluso dentro de una cadena JSON,
// asi que hay que reconstruir el texto completo antes de parsear.
function parseSeed(filePath) {
  const text = fs.readFileSync(filePath, 'utf8').replace(/^﻿/, '');

  const start = text.indexOf('DECLARE @DATA');
  if (start === -1) {
    throw new Error(`No se encontro "DECLARE @DATA" en ${filePath}`);
  }
  const end = text.indexOf('MERGE INTO', start);
  const region = text.slice(start, end === -1 ? text.length : end);

  let payload = '';
  let i = 0;
  while (i < region.length) {
    const open = region.indexOf("N'", i);
    if (open === -1) break;

    let j = open + 2;
    let chunk = '';
    while (j < region.length) {
      if (region[j] === "'") {
        if (region[j + 1] === "'") {
          chunk += "'"; // comilla escapada de SQL
          j += 2;
          continue;
        }
        break; // fin del literal
      }
      chunk += region[j];
      j += 1;
    }
    payload += chunk;
    i = j + 1;
  }

  const first = payload.indexOf('[');
  const last = payload.lastIndexOf(']');
  if (first === -1 || last === -1) {
    throw new Error(`No se encontro el array JSON en ${filePath}`);
  }

  return JSON.parse(payload.slice(first, last + 1));
}

module.exports = { parseSeed };
