#!/usr/bin/env node

function somar(a, b) {
  return a + b;
}

function multiplicar(a, b) {
  return a * b;
}

function ehPar(numero) {
  return numero % 2 === 0;
}

module.exports = { somar, multiplicar, ehPar };
