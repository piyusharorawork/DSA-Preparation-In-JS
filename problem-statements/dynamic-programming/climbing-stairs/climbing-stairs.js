// Recursive Approach

export function climbStairsV1(n) {
  const helper = (currentStep = n) => {
    if (currentStep < 3) return currentStep;

    return climbStairs(n - 1) + climbStairs(n - 2);
  };

  return helper(n);
}

// Iterative approach using DP
export function climbStairs(n) {
  const table = new Array(n);

  table[0] = 1;
  table[1] = 2;

  if (n < 3) return n;
  for (let i = 2; i < n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table[n - 1];
}
