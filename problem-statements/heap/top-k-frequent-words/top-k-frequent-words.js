import { PriorityQueue } from "../../../data-structures/heap/heap";

export function topKFrequent(words, k) {
  const hash = {};
  for (const word of words) hash[word] = hash[word] ? hash[word] + 1 : 1;

  //min heap
  const pq = new PriorityQueue({
    compare: (a, b) => {
      if (a.priority === b.priority) return b.val.localeCompare(a.val); // same word count , larger value will be removed first
      return a.priority - b.priority; // low word count will be removed first
    },
  });

  for (const word in hash) {
    const wordCount = hash[word];
    pq.enqueue({ val: word, priority: wordCount });

    if (pq.size() > k) pq.dequeue();
  }

  const result = new Array(k);

  for (let i = k - 1; i >= 0; i--) {
    result[i] = pq.dequeue().val;
  }

  return result;
}
