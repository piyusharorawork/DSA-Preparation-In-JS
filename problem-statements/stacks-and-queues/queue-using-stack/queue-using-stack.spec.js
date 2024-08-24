import { test, describe, expect } from "vitest";
import { MyQueue } from "./queue-using-stack";

describe("queue using-stack", () => {
  test("My queue", () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    const peekVal = queue.peek();
    expect(peekVal).toBe(1);
    queue.pop();
    expect(queue.empty()).toBeFalsy();
  });
});
