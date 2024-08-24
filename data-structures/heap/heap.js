export class MinHeap {
  constructor() {
    this.elements = [];
  }

  // Adds a new element to the heap
  insert(val) {
    this.elements.push(val);
    this.siftUp(this.size() - 1);
  }

  // Remove the value from heap
  remove() {
    if (this.isEmpty()) {
      throw "cannot remove from empty heap";
    }
    const minVal = this.elements[0];
    const lastVal = this.elements.pop();

    if (this.elements.length > 0) {
      this.elements[0] = lastVal;
      this.siftDown(0);
    }
    return minVal;
  }

  swap(i, j) {
    [this.elements[i], this.elements[j]] = [this.elements[j], this.elements[i]];
  }

  getParentIndex(index) {
    return Math.floor((index - 1) / 2);
  }

  getLeftChildIndex(index) {
    return 2 * index + 1;
  }

  getRightChildIndex(index) {
    return 2 * index + 2;
  }

  siftUp(index) {
    while (index > 0) {
      const parentIndex = this.getParentIndex(index);
      const parentVal = this.elements[parentIndex];
      const currentVal = this.elements[index];
      if (parentVal <= currentVal) break;
      this.swap(parentIndex, index);
      index = parentIndex;
    }
  }

  siftDown(index) {
    const length = this.elements.length;
    const element = this.elements[index];

    while (true) {
      const leftChildIndex = this.getLeftChildIndex(index);
      const rightChildIndex = this.getRightChildIndex(index);

      // If left child exists
      if (leftChildIndex < length) {
        const leftChild = this.elements[leftChildIndex];
        if (leftChild < element) {
          this.swap(leftChildIndex, index);
          index = leftChildIndex;
          continue;
        }
      }

      // If right child exists
      if (rightChildIndex < length) {
        const rightChild = this.elements[rightChildIndex];
        if (rightChild < element) {
          this.swap(rightChildIndex, index);
          index = rightChildIndex;
          continue;
        }
      }

      // When no left and right child exists
      break;
    }
  }

  // Returns the minimum value from the heap
  getMin() {
    return this.elements[0];
  }

  // Returns number of elements in heap
  size() {
    return this.elements.length;
  }

  // Take an unordered array and construct a heap
  heapify() {}

  // To check if the heap has elements or not
  isEmpty() {
    return this.size() === 0;
  }
}
