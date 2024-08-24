import { Queue } from "./queue";
import { expect, test } from "vitest";

test("Implement queue", () => {
  const queue = new Queue();
  queue.enqueue(100);
  queue.enqueue(200);
  queue.enqueue(300);
  expect(queue.peek()).toBe(100);
  queue.enqueue(50);
  queue.dequeue();
  queue.dequeue();

  expect(queue.size()).toBe(2);
  expect(queue.isEmpty()).toBeFalsy();

  queue.dequeue();
  expect(queue.dequeue()).toBe(50);
  expect(queue.isEmpty()).toBeTruthy();
});
