export class Stack {
  constructor() {
    this.elements = [];
  }

  push(element) {
    this.elements.push(element);
  }

  pop() {
    return this.elements.pop();
  }

  size() {
    return this.elements.length;
  }

  isEmpty() {
    return this.size() === 0;
  }

  peek() {
    return this.elements[this.size() - 1];
  }
}
