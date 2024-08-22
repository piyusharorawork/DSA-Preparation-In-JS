export class MinStackV1 {
  constructor() {
    this.minVal = Infinity;
    this.elements = [];
  }

  push(element) {
    this.minVal = Math.min(this.minVal, element);
    this.elements.push(element);
  }

  getMin() {
    return this.minVal;
  }

  pop() {
    if (this.top() !== this.minVal) this.elements.pop();
    else {
      this.elements.pop();
      let newMin = Infinity;
      for (let i = 0; i < this.elements.length; i++) {
        newMin = Math.min(this.elements[i], newMin);
      }
      this.minVal = newMin;
    }
  }

  top() {
    return this.elements[this.elements.length - 1];
  }
}

export class MinStackV2 {
  constructor() {
    this.elements = [];
  }

  push(val) {
    //empty stack
    if (this.elements.length === 0) {
      this.elements.push({ val, min: val });
    } else {
      const topNode = this.elements[this.elements.length - 1];
      const min = Math.min(topNode.min, val);
      this.elements.push({ val, min });
    }
  }

  getMin() {
    const topNode = this.elements[this.elements.length - 1];
    return topNode.min;
  }

  pop() {
    this.elements.pop();
  }

  top() {
    return this.elements[this.elements.length - 1].val;
  }
}

export class MinStack {
  constructor() {
    this.elements = [];
  }

  push(val) {
    //empty stack
    if (this.elements.length === 0) {
      this.elements.push({ val, min: val });
    } else {
      const N = this.elements.length;
      const topNode = this.elements[N - 1];
      const min = Math.min(topNode.min, val);
      this.elements.push({ val, min });
    }
  }

  pop() {
    this.elements.pop();
  }

  top() {
    const N = this.elements.length;
    const topNode = this.elements[N - 1];
    return topNode.val;
  }

  getMin() {
    const N = this.elements.length;
    const topNode = this.elements[N - 1];
    return topNode.min;
  }
}
