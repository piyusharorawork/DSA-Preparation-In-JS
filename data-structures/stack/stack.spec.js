import { expect, test } from "vitest";
import { Stack } from "./stack";

test("Implement stack", () => {
  const stack = new Stack();

  stack.push(100);
  stack.push(200);
  stack.push(300);
  expect(stack.pop()).toBe(300);
  expect(stack.pop()).toBe(200);
  stack.push(400);
  stack.push(500);
  expect(stack.peek()).toBe(500);
  expect(stack.size()).toBe(3);
});
