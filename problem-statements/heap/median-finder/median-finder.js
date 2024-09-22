import {
  MaxHeap,
  MinHeap,
  PriorityQueue,
} from "../../../data-structures/heap/heap";

// Using min and max heap
export class MedianFinderV1 {
  constructor() {
    this.maxHeap = new MaxHeap();
    this.minHeap = new MinHeap();
  }

  addNum(num) {
    if (this.maxHeap.size() === 0) {
      this.maxHeap.insert(num);
    }

    // if min heap size is smaller
    else if (this.minHeap.size() < this.maxHeap.size())
      this.minHeap.insert(num);
    // if size are equal
    else {
      this.maxHeap.insert(num);

      // balance the heaps

      const val1 = this.minHeap.remove();
      const val2 = this.maxHeap.remove();

      this.minHeap.insert(val2);
      this.maxHeap.insert(val1);
    }
  }

  findMedian() {
    if (this.maxHeap.size() > this.minHeap.size()) {
      return this.maxHeap.peek();
    }

    const mid1 = this.maxHeap.peek();
    const mid2 = this.minHeap.peek();

    return (mid1 + mid2) / 2;
  }
}

// Using Priority Queue
export class MedianFinderV2 {
  constructor() {
    this.maxPQ = new PriorityQueue({
      compare: (a, b) => b.priority - a.priority,
    });
    this.minPQ = new PriorityQueue({
      compare: (a, b) => a.priority - b.priority,
    });
  }

  addNum(num) {
    if (this.maxPQ.size() === 0)
      this.maxPQ.enqueue({ value: num, priority: num });
    else if (this.minPQ.size() < this.maxPQ.size())
      this.minPQ.enqueue({ value: num, priority: num });
    // if sizes are equal
    else {
      this.maxPQ.enqueue({ value: num, priority: num });

      // balance the pqs
      const val1 = this.minPQ.dequeue().value;
      const val2 = this.maxPQ.dequeue().value;

      this.minPQ.enqueue({ value: val2, priority: val2 });
      this.maxPQ.enqueue({ value: val1, priority: val1 });
    }
  }

  findMedian() {
    if (this.maxPQ.size() > this.minPQ.size()) return this.maxPQ.front().value;

    const mid1 = this.maxPQ.front().value;
    const mid2 = this.minPQ.front().value;

    return (mid1 + mid2) / 2;
  }
}

// Using Cleaer Priority Queue
export class MedianFinderV3 {
  constructor() {
    this.maxPQ = new PriorityQueue({
      compare: (a, b) => b - a,
    });
    this.minPQ = new PriorityQueue({
      compare: (a, b) => a - b,
    });
  }

  addNum(num) {
    this.maxPQ.enqueue(num);

    // We need to ensure all elements in the maxPQ <= elements in the minPQ
    if (
      this.maxPQ.size() > 0 &&
      this.minPQ.size() > 0 &&
      this.maxPQ.front() > this.minPQ.front()
    ) {
      const num1 = this.maxPQ.dequeue();
      const num2 = this.minPQ.dequeue();

      this.maxPQ.enqueue(num2);
      this.minPQ.enqueue(num1);
    }

    // We need to ensure that the size of maxPQ cannot excceed minPQ Size +1
    if (this.maxPQ.size() > this.minPQ.size() + 1) {
      this.minPQ.enqueue(this.maxPQ.dequeue());
    } else if (this.minPQ.size() > this.maxPQ.size()) {
      this.maxPQ.enqueue(this.minPQ.dequeue());
    }
  }

  findMedian() {
    if (this.maxPQ.size() > this.minPQ.size()) return this.maxPQ.front();

    const mid1 = this.maxPQ.front();
    const mid2 = this.minPQ.front();

    return (mid1 + mid2) / 2;
  }
}

// Using array
export class MedianFinderV4 {
  constructor() {
    this.list = [];
  }

  ddNum(num) {
    this.list.push(num);
  }

  findMedian() {
    const N = this.list.length;

    if (N === 1) return this.list[0];

    // ODD
    if (N % 2 === 1) {
      const index = Math.floor(N / 2); // 7 => 3
      return this.list[index];
    }

    const leftIdx = Math.floor((N - 1) / 2); // 8 => 3,4
    const rightIdx = leftIdx + 1;
    return (this.list[leftIdx] + this.list[rightIdx]) / 2;
  }
}

export class MedianFinderV5 {
  constructor() {
    this.maxPQ = new PriorityQueue({ compare: (a, b) => b - a });
    this.minPQ = new PriorityQueue({ compare: (a, b) => a - b });
  }

  addNum(num) {
    // always add to maxPQ
    this.maxPQ.enqueue(num);

    // balance the pq such that no elements in max PQ has value higher than minPQ
    if (
      this.maxPQ.size() > 0 &&
      this.minPQ.size() > 0 &&
      this.maxPQ.front() > this.minPQ.front()
    ) {
      const num1 = this.maxPQ.dequeue();
      const num2 = this.minPQ.dequeue();
      this.maxPQ.enqueue(num2);
      this.minPQ.enqueue(num1);
    }

    // Balance the sizes
    if (this.maxPQ.size() > this.minPQ.size() + 1) {
      this.minPQ.enqueue(this.maxPQ.dequeue());
    } else if (this.minPQ.size() > this.maxPQ.size()) {
      this.maxPQ.enqueue(this.minPQ.dequeue());
    }
  }

  findMedian() {
    if (this.maxPQ.size() > this.minPQ.size()) return this.maxPQ.front();

    const mid1 = this.maxPQ.front();
    const mid2 = this.minPQ.front();
    return (mid1 + mid2) / 2;
  }
}

export class MedianFinder {
  constructor() {
    this.maxPQ = new PriorityQueue({ compare: (a, b) => b - a });
    this.minPQ = new PriorityQueue({ compare: (a, b) => a - b });
  }

  addNum(num) {
    // Always add to maxPQ first
    this.maxPQ.enqueue(num);

    // Ensure maxPQ holds smaller half and minPQ holds larger half
    if (
      this.maxPQ.size() > 0 &&
      this.minPQ.size() > 0 &&
      this.maxPQ.front() > this.minPQ.front()
    )
      this.minPQ.enqueue(this.maxPQ.dequeue());

    // Balance the sizes: maxPQ can only have 1 more element than minPQ
    if (this.maxPQ.size() > this.minPQ.size() + 1)
      this.minPQ.enqueue(this.maxPQ.dequeue());
    else if (this.minPQ.size() > this.maxPQ.size())
      this.maxPQ.enqueue(this.minPQ.dequeue());
  }

  findMedian() {
    if (this.maxPQ.size() > this.minPQ.size()) return this.maxPQ.front();

    const mid1 = this.maxPQ.front();
    const mid2 = this.minPQ.front();
    return (mid1 + mid2) / 2;
  }
}
