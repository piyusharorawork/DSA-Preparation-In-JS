import { Stack } from "../../../data-structures/stack/stack";
export function smallerElementLeft(nums) {
  const N = nums.length;
  const result = new Array(N);
  const stack = new Stack();

  for (let i = 0; i < N; i++) {
    // we will only insert in stack in descending order
    // because we want to pick smallest first

    while (!stack.isEmpty() && nums[i] <= stack.peek()) stack.pop();
    result[i] = stack.isEmpty() ? -1 : stack.peek();
    stack.push(nums[i]);
  }

  return result;
}
