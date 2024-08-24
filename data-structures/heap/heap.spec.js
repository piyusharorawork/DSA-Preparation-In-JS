import { displayHeap } from "../../helpers/heap-helpers";
import { MinHeap } from "./heap";
import { test, expect } from "vitest";

test("min heap", () => {
  const minHeap = new MinHeap();
  minHeap.insert(400);
  minHeap.insert(200);
  minHeap.insert(100);
  minHeap.insert(300);
  expect(minHeap.getMin()).toBe(100);
  minHeap.remove();
  minHeap.insert(40);
  minHeap.insert(20);
  minHeap.insert(490);
  minHeap.insert(80);
  expect(minHeap.remove()).toBe(20);
  expect(minHeap.size()).toBe(6);

  displayHeap(minHeap);
});
