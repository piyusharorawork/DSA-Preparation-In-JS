import { Stack } from "../../../data-structures/stack/stack";

export function finalPrices(prices) {
  const N = prices.length;
  const result = new Array(N);
  const stack = new Stack();

  for (let i = N - 1; i >= 0; i--) {
    // we need to pick the smallest first
    // ensure descending order stack
    while (!stack.isEmpty() && prices[i] < stack.peek()) stack.pop();

    result[i] = stack.isEmpty() ? prices[i] : prices[i] - stack.peek();
    stack.push(prices[i]);
  }

  return result;
}
