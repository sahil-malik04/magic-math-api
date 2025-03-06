const calculateMagicMath = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;

  let previousValue = 0,
    currentValue = 1,
    magicMathResult = 0;

  for (let step = 2; step <= n; step++) {
    magicMathResult = previousValue + currentValue + step;
    previousValue = currentValue;
    currentValue = magicMathResult;
  }

  return magicMathResult;
};

module.exports = { calculateMagicMath };
