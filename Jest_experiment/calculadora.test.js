const { somar, multiplicar, ehPar } = require("./calculadora");

test("deve somar dois números", () => {
  expect(somar(2, 3)).toBe(5);
});

test("deve multiplicar dois números", () => {
  expect(multiplicar(2, 3)).toBe(6);
});

test("deve identificar se o número é par", () => {
  expect(ehPar(2)).toBe(true);
});

test("deve identificar se o número é impar", () => {
  expect(ehPar(3)).toBe(false);
});
