import { Stack } from "../../../data-structures/stack";

export class MyQueue {
  constructor() {
    this.inputStack = new Stack();
    this.outputStack = new Stack();
  }

  push(x) {
    this.inputStack.push(x);
  }

  empty() {
    return this.inputStack.isEmpty() && this.outputStack.isEmpty();
  }

  peek() {
    if (this.outputStack.isEmpty()) {
      while (!this.inputStack.isEmpty()) {
        this.outputStack.push(this.inputStack.pop());
      }
    }

    return this.outputStack.peek();
  }

  pop() {
    this.peek();
    return this.outputStack.pop();
  }
}
