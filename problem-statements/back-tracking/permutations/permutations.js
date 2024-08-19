export function permute(nums) {
  const N = nums.length;
  if (N === 1) return [nums];

  const result = [];

  const backTrack = (start = 0, end = N, stack = []) => {
    // Termination
    if (stack.length === N) {
      result.push([...stack]);
      return;
    }

    for (let i = start; i < end; i++) {
      // Conitnue recursion condition
      if (stack.includes(nums[i])) continue;
      stack.push(nums[i]);
      backTrack(start, end, stack); // Looping
      stack.pop();
    }
  };

  backTrack();

  return result;
}
