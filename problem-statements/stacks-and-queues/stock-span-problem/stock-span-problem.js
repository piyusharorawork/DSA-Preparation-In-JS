import { Stack } from "../../../data-structures/stack/stack";

export function stockSpanV1(nums) {
  const N = nums.length;

  const result = new Array(N);
  const stack = new Stack();

  for (let i = 0; i < N; i++) {
    // Process the stack to find the nearest larger element
    while (!stack.isEmpty() && nums[i] >= nums[stack.peek()]) stack.pop();

    // Calculate the span
    result[i] = stack.isEmpty() ? i + 1 : i - stack.peek();

    // Push the current index onto the stack
    stack.push(i);
  }

  return result;
}

export function stockSpan(prices) {
  const N = prices.length;
  const stack = new Stack();
  const result = new Array(N);

  // NGL
  for (let i = 0; i < N; i++) {
    // evict smaller
    while (!stack.isEmpty() && prices[stack.peek()] <= prices[i]) stack.pop();

    // when stack is empty it means all the prices before that are alreay low
    result[i] = stack.isEmpty() ? i + 1 : i - stack.peek();
    stack.push(i);
  }

  return result;
}
