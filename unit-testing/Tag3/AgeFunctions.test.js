const { isAdult } = require("./AgeFunctions");

describe("Tests for isAdult Function", () => {
  test("Test for age being 18", () => {
    expect(isAdult(18)).toBe(true);
  });

  test("should return true for age greater than 18", () => {
    expect(isAdult(21)).toBe(true);
    expect(isAdult(100)).toBe(true);
  });

  test("should return false for age less than 18", () => {
    expect(isAdult(17)).toBe(false);
    expect(isAdult(5)).toBe(false);
  });

  test("should throw TypeError for non-numeric input", () => {
    expect(() => isAdult("abc")).toThrow(TypeError);
  });

  test("should throw TypeError for age smaller than 0", () => {
    expect(() => isAdult(-1)).toThrow(TypeError);
  });
});
