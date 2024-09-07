import { Stack } from "../../../data-structures/stack/stack";
export class StockSpannerV1 {
  constructor() {
    this.nums = [];
    this.index = 0;
    this.stack = new Stack();
  }

  next(num) {
    // Process the stack to maintain the largest first
    while (!this.stack.isEmpty() && num >= this.nums[this.stack.peek()])
      this.stack.pop();

    // Calculate the result (span)
    const result = this.stack.isEmpty()
      ? this.index + 1
      : this.index - this.stack.peek();

    // Push the current index onto the stack
    this.stack.push(this.index);
    this.nums[this.index] = num;
    this.index++;

    return result;
  }
}

export class StockSpanner {
  constructor() {
    // Only store the prices in the ascending order
    this.stack = new Stack();

    // Store all the prices at any given day
    this.prices = [];

    // To keep track of current day
    this.day = 0;
  }

  next(price) {
    // balance the stack
    while (!this.stack.isEmpty() && price >= this.prices[this.stack.peek()])
      this.stack.pop();

    const stockSpan = this.stack.isEmpty()
      ? this.day + 1
      : this.day - this.stack.peek();

    this.stack.push(this.day);
    this.prices[this.day] = price;
    this.day++;

    return stockSpan;
  }
}
