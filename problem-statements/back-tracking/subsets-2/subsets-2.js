export function subsetsWithDup(nums) {
  const N = nums.length;

  const result = [];
  nums.sort((a, b) => a - b);

  const dfs = (start = 0, stack = []) => {
    result.push([...stack]);

    for (let i = start; i < N; i++) {
      if (i > start && nums[i] === nums[i - 1]) continue;
      stack.push(nums[i]);
      dfs(i + 1, stack);
      stack.pop();
    }
  };

  dfs();

  return result;
}
