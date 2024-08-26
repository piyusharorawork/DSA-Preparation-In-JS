import { displayHeap } from "../../helpers/heap-helpers";
import { displayBinaryTree } from "../../helpers/tree-helpers";
import { MaxHeap, MinHeap, PriorityQueue } from "./heap";
import { test, expect } from "vitest";

test("min heap", () => {
  const minHeap = new MinHeap();
  minHeap.insert(400);
  minHeap.insert(200);
  minHeap.insert(100);
  minHeap.insert(300);
  expect(minHeap.peek()).toBe(100);
  minHeap.remove();
  minHeap.insert(40);
  minHeap.insert(20);
  minHeap.insert(490);
  minHeap.insert(80);
  expect(minHeap.remove()).toBe(20);
  expect(minHeap.size()).toBe(6);
});

test("min heap heapify", () => {
  const minHeap = new MinHeap();
  minHeap.heapify([5, 3, 9, 2, 9, 7, 55, 3]);
  expect(minHeap.peek()).toBe(2);
  minHeap.insert(4);
  minHeap.remove();
  minHeap.remove();
  minHeap.remove();
  minHeap.remove();
  expect(minHeap.remove()).toBe(5);
  expect(minHeap.size()).toBe(4);
});

test("max heap", () => {
  const maxHeap = new MaxHeap();
  maxHeap.insert(400);
  maxHeap.insert(200);
  maxHeap.insert(100);
  maxHeap.insert(300);
  expect(maxHeap.peek()).toBe(400);
  maxHeap.remove();
  maxHeap.insert(40);
  maxHeap.insert(20);
  maxHeap.insert(490);
  maxHeap.insert(80);
  expect(maxHeap.remove()).toBe(490);
  expect(maxHeap.size()).toBe(6);
});

test("max heap heapify", () => {
  const maxHeap = new MaxHeap();
  maxHeap.heapify([5, 3, 9, 2, 9, 7, 55, 3]);
  expect(maxHeap.peek()).toBe(55);
  maxHeap.insert(4);
  maxHeap.remove(); //55
  maxHeap.remove(); //9
  maxHeap.remove(); // 9
  maxHeap.remove(); // 7
  expect(maxHeap.remove()).toBe(5);
  expect(maxHeap.size()).toBe(4); // 4 3 3 2
});

test("priority queue", () => {
  const pq = new PriorityQueue();
  pq.enqueue({ value: "piyush", priority: 92 });
  pq.enqueue({ value: "himani", priority: 98 });
  pq.enqueue({ value: "sumit", priority: 70 });
  pq.enqueue({ value: "isha", priority: 85 });
  pq.enqueue({ value: "varun", priority: 88 });
  pq.enqueue({ value: "kishore", priority: 90 });
  expect(pq.front().value).toBe("himani");
  expect(pq.dequeue().value).toBe("himani");
  expect(pq.dequeue().value).toBe("piyush");
  expect(pq.dequeue().value).toBe("kishore");
  expect(pq.dequeue().value).toBe("varun");
  expect(pq.front().value).toBe("isha");
  expect(pq.size()).toBe(2);
});
