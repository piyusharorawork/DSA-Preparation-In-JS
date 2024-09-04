import { Stack } from "../../../data-structures/stack/stack";

export function nextGreaterElement(nums1, nums2) {
  const M = nums1.length;
  const N = nums2.length;

  const stack = new Stack();
  stack.push(nums2[N - 1]);

  const map = {};

  for (let i = N - 1; i >= 0; i--) {
    // we only insert element in stack which is smaller than top
    while (nums2[i] >= stack.peek() && !stack.isEmpty()) stack.pop();
    map[nums2[i]] = stack.isEmpty() ? -1 : stack.peek();
    stack.push(nums2[i]);
  }

  const result = new Array(M);
  for (let i = 0; i < M; i++) {
    result[i] = map[nums1[i]];
  }

  return result;
}
