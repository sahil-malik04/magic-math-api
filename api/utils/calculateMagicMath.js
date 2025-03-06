const memo = new Map();

// implement with memoization
const calculateMagicMath = (n) => {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (memo.has(n)) return memo.get(n);

  const result = calculateMagicMath(n - 2) + calculateMagicMath(n - 1) + n;
  memo.set(n, result);
  return result;
};

module.exports = { calculateMagicMath };
