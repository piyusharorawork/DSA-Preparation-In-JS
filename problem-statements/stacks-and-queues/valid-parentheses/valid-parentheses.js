import { Stack } from "../../../data-structures/stack";

export function isValid(s) {
  const stack = new Stack();

  for (const ch of s) {
    if (ch === "(") stack.push(")");
    else if (ch === "{") stack.push("}");
    else if (ch === "[") stack.push("]");
    else if (stack.isEmpty() || stack.pop() !== ch) return false;
  }

  return stack.isEmpty();
}
