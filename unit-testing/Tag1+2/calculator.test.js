const calculator = require("./calculator");

test("Teste die Subtraktion von zwei positiven Zahlen", () => {
  expect(calculator.substract(5, 3)).toEqual(2);
});

test("Teste die Subtraktion von einer negativen und einer positiven Zahl", () => {
  expect(calculator.substract(-5, 3)).toEqual(-8);
});

test("Teste die Subtraktion von einer Zahl und 0", () => {
  expect(calculator.substract(5, 0)).toEqual(5);
});

test("Teste die Multiplikation von zwei positiven Zahlen", () => {
  expect(calculator.multiply(2, 3)).toEqual(6);
});

test("Teste die Multiplikation von einer negativen und einer positiven Zahl", () => {
  expect(calculator.multiply(-2, 3)).toEqual(-6);
});

test("Teste die Multiplikation von einer Zahl und 0", () => {
  expect(calculator.multiply(5, 0)).toEqual(0);
});
