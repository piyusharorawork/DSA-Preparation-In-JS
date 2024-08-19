export function subsets(nums) {
  const N = nums.length;

  if (N === 0) return [[]];

  const result = [];

  const backTrack = (start = 0, end = N, stack = []) => {
    result.push([...stack]);

    for (let i = start; i < end; i++) {
      stack.push(nums[i]);
      backTrack(i + 1, end, stack);
      stack.pop();
    }
  };

  backTrack();
  return result;
}
