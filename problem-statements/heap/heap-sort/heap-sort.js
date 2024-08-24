import { MinHeap } from "../../../data-structures/heap/heap";

export function sortArray(nums) {
  const N = nums.length;
  const minHeap = new MinHeap();
  minHeap.heapify(nums);
  const result = [];
  for (let i = 0; i < N; i++) {
    result.push(minHeap.remove());
  }

  return result;
}
