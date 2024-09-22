import { PriorityQueue } from "../../../data-structures/heap/heap";

export function findClosestElementsV1(nums, k, x) {
  const maxHeap = new PriorityQueue({
    compare: (a, b) => {
      if (diff(a, x) === diff(b, x)) {
        return b - a;
      }
      return diff(b, x) - diff(a, x);
    },
  });

  const diff = (val) => Math.abs(x - val);

  for (let i = 0; i < nums.length; i++) {
    maxHeap.enqueue(nums[i]);

    if (maxHeap.size() > k) maxHeap.dequeue();
  }

  const result = [];
  while (maxHeap.size()) {
    result.push(maxHeap.dequeue());
  }

  return result.sort((a, b) => a - b);
}

export function findClosestElements(nums, k, x) {
  const N = nums.length;
  const pq = new PriorityQueue({
    compare: (a, b) => {
      // if both has same priority
      if (a.priority === b.priority) return b.val - a.val;

      return b.priority - a.priority;
    },
  });

  const diff = (i) => Math.abs(nums[i] - x);

  for (let i = 0; i < N; i++) {
    pq.enqueue({ val: nums[i], priority: diff(i) });

    if (pq.size() > k) pq.dequeue();
  }

  const result = [];
  while (!pq.isEmpty()) result.push(pq.dequeue().val);

  result.sort((a, b) => a - b);

  return result;
}
