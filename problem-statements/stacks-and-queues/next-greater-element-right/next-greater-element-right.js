import { Stack } from "../../../data-structures/stack/stack";

// Brute Force
export function nextGreaterElementRightV1(nums) {
  const N = nums.length;
  const result = new Array(N).fill(-1);

  for (let i = 0; i < N - 1; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nums[i] >= nums[j]) continue;

      result[i] = nums[j];
      break;
    }
  }

  return result;
}

export function nextGreaterElementRight(nums) {
  const N = nums.length;
  if (N === 0) return [];

  const result = new Array(N);
  const stack = new Stack();

  for (let i = N - 1; i >= 0; i--) {
    // we only need to insert the elements in stack which is smaller than peek
    while (nums[i] >= stack.peek() && !stack.isEmpty()) {
      stack.pop();
    }

    result[i] = stack.isEmpty() ? -1 : stack.peek();

    stack.push(nums[i]);
  }

  return result;
}
