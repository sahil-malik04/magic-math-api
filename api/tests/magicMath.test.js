const { calculateMagicMath } = require("../utils/calculateMagicMath");

describe("Magic Math Calculation", () => {
  test("magicMath(0) should return 0", () => {
    expect(calculateMagicMath(0)).toBe(0);
  });

  test("magicMath(1) should return 1", () => {
    expect(calculateMagicMath(1)).toBe(1);
  });

  test("magicMath(5) should return 26", () => {
    expect(calculateMagicMath(5)).toBe(26);
  });
});
