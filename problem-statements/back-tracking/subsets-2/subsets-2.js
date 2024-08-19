export function subsetsWithDup(nums) {
  const N = nums.length;

  const result = [];
  nums.sort((a, b) => a - b);

  const backTrack = (start = 0, end = N, stack = []) => {
    result.push([...stack]);

    for (let i = start; i < end; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;

      stack.push(nums[i]);
      backTrack(i + 1, end, stack);
      stack.pop();
    }
  };

  backTrack();

  return result;
}
