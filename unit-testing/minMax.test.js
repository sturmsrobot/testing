const minMax = require("./minMax");

describe("Min & Max Functions", () => {
  describe("Min Function", () => {
    test("Teste die min-Funktion mit zwei positiven Zahlen", () => {
      expect(minMax.min(3, 5)).toEqual(3);
    });

    test("Teste die min-Funktion mit einer negativen und einer positiven Zahl", () => {
      expect(minMax.min(-3, 5)).toEqual(-3);
    });

    test("Teste die min-Funktion mit einer Zahl und 0", () => {
      expect(minMax.min(0, 5)).toEqual(0);
    });
  });

  describe("Max Function", () => {
    test("Teste die max-Funktion mit zwei positiven Zahlen", () => {
      expect(minMax.max(3, 5)).toEqual(5);
    });

    test("Teste die max-Funktion mit einer negativen und einer positiven Zahl", () => {
      expect(minMax.max(-3, 5)).toEqual(5);
    });

    test("Teste die max-Funktion mit einer Zahl und 0", () => {
      expect(minMax.max(0, 5)).toEqual(5);
    });
  });
});
