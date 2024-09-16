export function subsets(nums) {
  const N = nums.length;
  const result = [];

  const backTrack = (start = 0, stack = []) => {
    result.push([...stack]);

    for (let i = start; i < N; i++) {
      stack.push(nums[i]);
      backTrack(i + 1, stack);
      stack.pop();
    }
  };

  backTrack();
  return result;
}
