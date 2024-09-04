import { Stack } from "../../../data-structures/stack/stack";

export function nearestGreaterElementLeft(nums) {
  const N = nums.length;

  const result = new Array(N);
  const stack = new Stack();

  for (let i = 0; i < N; i++) {
    //only push to stack which are greater than peek
    while (!stack.isEmpty() && nums[i] >= stack.peek()) stack.pop();

    result[i] = stack.isEmpty() ? -1 : stack.peek();
    stack.push(nums[i]);
  }

  return result;
}
