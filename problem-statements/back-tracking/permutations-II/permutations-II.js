export function permuteUnique(nums) {
  const N = nums.length;

  if (N === 1) return [nums];

  const result = [];

  nums.sort((a, b) => a - b);

  const backTrack = (start = 0, end = N, stack = [], used = []) => {
    //termination
    if (stack.length === N) {
      result.push([...stack]);
      return;
    }

    for (let i = start; i < end; i++) {
      if (used[i]) continue;
      if (i > 0 && nums[i] === nums[i - 1] && used[i - 1]) continue;

      used[i] = true;
      stack.push(nums[i]);
      backTrack(start, end, stack, used);
      stack.pop();
      used[i] = false;
    }
  };

  backTrack();

  return result;
}
