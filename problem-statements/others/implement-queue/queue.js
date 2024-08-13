export class Queue {
  elements = [];

  enqueue(item) {
    this.elements.push(item);
  }

  dequeue() {
    return this.elements.shift();
  }

  peek() {
    return this.elements[0];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.elements.length;
  }
}
