export class MinHeap {
  constructor() {
    this.elements = [];
  }

  insert(value) {
    this.elements.push(value);
    this.siftUp(this.size() - 1);
  }

  remove() {
    const minValue = this.peek();
    const lastValue = this.elements.pop();

    if (this.elements.length > 0) {
      this.elements[0] = lastValue;
      this.siftDown(0);
    }

    return minValue;
  }

  peek() {
    return this.elements[0];
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  swap(i, j) {
    [this.elements[i], this.elements[j]] = [this.elements[j], this.elements[i]];
  }

  heapify(values) {
    this.elements = values;
    for (let i = this.size() - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  siftUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.elements[parentIndex] <= this.elements[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  siftDown(index) {
    const N = this.size();
    const element = this.elements[index];

    while (true) {
      const leftChildIndex = 2 * index + 1;
      const rightChildIndex = 2 * index + 2;

      let leftChild, rightChild;
      let swapIndex = null;

      // If left child exists
      if (leftChildIndex < N) {
        leftChild = this.elements[leftChildIndex];
        if (leftChild < element) {
          swapIndex = leftChildIndex;
        }
      }

      // If right child exists
      if (rightChildIndex < N) {
        rightChild = this.elements[rightChildIndex];
        if (
          (swapIndex === null && rightChild < element) ||
          (swapIndex !== null && rightChild < leftChild)
        ) {
          swapIndex = rightChildIndex;
        }
      }

      // If no swap needed, break out of the loop
      if (swapIndex === null) break;

      this.swap(swapIndex, index);
      index = swapIndex;
    }
  }
}

export class MaxHeap {
  constructor() {
    this.elements = [];
  }

  insert(val) {
    this.elements.push(val);
    this.siftUp(this.size() - 1);
  }

  remove() {
    const maxVal = this.peek();
    const lastVal = this.elements.pop();

    if (this.size() > 0) {
      this.elements[0] = lastVal;
      this.siftDown(0);
    }

    return maxVal;
  }

  peek() {
    return this.elements[0];
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  heapify(values) {
    this.elements = values;
    for (let i = this.size() - 1; i >= 0; i--) {
      this.siftDown(i);
    }
  }

  swap(i, j) {
    [this.elements[i], this.elements[j]] = [this.elements[j], this.elements[i]];
  }

  siftUp(index) {
    while (index > 0) {
      const parentIndex = Math.floor((index - 1) / 2);
      if (this.elements[parentIndex] >= this.elements[index]) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  siftDown(index) {
    while (true) {
      let swapIndex = null;

      const leftChildIndex = 2 * index + 1;
      if (
        leftChildIndex < this.size() &&
        this.elements[index] < this.elements[leftChildIndex]
      ) {
        swapIndex = leftChildIndex;
      }

      const rightChildIndex = 2 * index + 2;
      if (
        (rightChildIndex < this.size() &&
          swapIndex === null &&
          this.elements[index] < this.elements[rightChildIndex]) ||
        (swapIndex !== null &&
          this.elements[leftChildIndex] < this.elements[rightChildIndex])
      ) {
        swapIndex = rightChildIndex;
      }

      if (swapIndex === null) break;
      this.swap(index, swapIndex);
      index = swapIndex;
    }
  }
}

export class PriorityQueue {
  constructor(options) {
    this.elements = [];
    const defaultComparator = (a, b) => b.priority - a.priority;
    if (!options) {
      this.comparator = defaultComparator;
    } else {
      this.comparator =
        options.compare === undefined ? defaultComparator : options.compare;
    }
  }

  enqueue(data) {
    this.elements.push(data);
    this.heapifyUp();
  }

  front() {
    return this.elements[0];
  }

  dequeue() {
    if (this.size() === 1) return this.elements.pop();
    const lastElement = this.elements.pop();
    const top = this.elements[0];
    this.elements[0] = lastElement;
    this.heapifyDown();
    return top;
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  heapifyUp() {
    let index = this.size() - 1;
    while (index > 0) {
      const parent = Math.floor((index - 1) / 2);
      // if parent priority is already greater than index , break
      if (this.comparator(this.elements[index], this.elements[parent]) >= 0)
        break;

      // Now we know the priority of index is greater than parent
      // we need to swap it
      this.swap(parent, index);
      index = parent;
    }
  }

  heapifyDown() {
    let index = 0;

    while (true) {
      const left = 2 * index + 1;
      let max = index;
      if (left < this.size()) {
        // assume left index has the maximum priority
        max = left;
      }

      const right = 2 * index + 2;
      if (
        right < this.size() &&
        this.comparator(this.elements[max], this.elements[right]) > 0
      ) {
        max = right;
      }

      // break if the parent priority is already greater than max or same as max
      if (this.comparator(this.elements[max], this.elements[index]) >= 0) break;

      // now we now max has the greater priority than parent , we need to swap it
      this.swap(index, max);
      index = max;
    }
  }

  swap(index1, index2) {
    [this.elements[index1], this.elements[index2]] = [
      this.elements[index2],
      this.elements[index1],
    ];
  }
}
