export function productExceptSelfV1(nums) {
  const N = nums.length;

  const left = new Array(N).fill(1);
  for (let i = 1; i < N; i++) {
    left[i] = nums[i - 1] * left[i - 1];
  }

  const right = new Array(N).fill(1);

  for (let i = N - 2; i >= 0; i--) {
    right[i] = nums[i + 1] * right[i + 1];
  }

  const result = new Array(N);

  for (let i = 0; i < N; i++) {
    result[i] = left[i] * right[i];
  }

  return result;
}

export function productExceptSelf(nums) {
  const N = nums.length;
  const result = new Array(N).fill(1); // we will ignore this space

  // First pass
  for (let i = 1; i < N; i++) {
    result[i] = result[i - 1] * nums[i - 1];
  }

  // Now we know after first pass
  // result[N-1] we have already computed
  let right = 1;
  for (let i = N - 1; i >= 0; i--) {
    result[i] = right * result[i];
    right *= nums[i];
  }

  return result;
}
