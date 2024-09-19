export function permuteV1(nums) {
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

export function permuteV2(nums) {
  const N = nums.length;
  const result = [];

  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  const backTrack = (start = 0) => {
    if (start === N) return result.push([...nums]);
    for (let i = start; i < N; i++) {
      swap(i, start);
      backTrack(start + 1);
      swap(i, start);
    }
  };

  backTrack();

  return result;
}

export function permute(nums) {
  const N = nums.length;
  const result = [];

  const swap = (i, j) => ([nums[i], nums[j]] = [nums[j], nums[i]]);

  const backTrack = (start = 0) => {
    if (start === N - 1) return result.push([...nums]);
    for (let i = start; i < N; i++) {
      swap(i, start);
      backTrack(start + 1);
      swap(i, start);
    }
  };

  backTrack();

  return result;
}
