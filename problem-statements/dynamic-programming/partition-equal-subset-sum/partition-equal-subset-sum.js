// Only recursion
export function canPartitionV1(nums) {
  const N = nums.length;

  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  if (sum % 2 !== 0) return false;

  nums.sort((a, b) => a - b);

  const subArraySum = (n = N, remaining = sum / 2) => {
    if (remaining === 0) return true;
    if (n === 0) return false;
    const value = nums[n - 1];
    return (
      subArraySum(n - 1, remaining) || subArraySum(n - 1, remaining - value)
    );
  };

  return subArraySum();
}

export function canPartition(nums) {
  const N = nums.length;

  let sum = 0;
  for (const num of nums) {
    sum += num;
  }

  if (sum % 2 !== 0) return false;

  const target = sum / 2;

  const table = Array.from({ length: N + 1 }, () => new Array(target + 1));

  for (let n = 0; n < table.length; n++) {
    for (let remaining = 0; remaining < table[0].length; remaining++) {
      if (remaining === 0) table[n][remaining] = true;
      else if (n === 0) table[n][remaining] = false;
      else {
        const value = nums[n - 1];
        if (value <= remaining) {
          table[n][remaining] =
            table[n - 1][remaining] || table[n - 1][remaining - value];
        } else {
          table[n][remaining] = table[n - 1][remaining];
        }
      }
    }
  }

  return table[N][target];
}
