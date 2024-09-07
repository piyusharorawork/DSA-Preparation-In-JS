import { Stack } from "../../../data-structures/stack/stack";

export function largestRectangleAreaV1(heights) {
  const N = heights.length;

  // Nearest Left Small Indexes
  const nls = new Array(N);
  const nlsStack = new Stack();

  for (let i = 0; i < N; i++) {
    // balance descending stack
    while (!nlsStack.isEmpty() && heights[i] <= heights[nlsStack.peek()])
      nlsStack.pop();

    nls[i] = nlsStack.isEmpty() ? -1 : nlsStack.peek();
    nlsStack.push(i);
  }

  // Nearest Right Small Indexes
  const nrs = new Array(N);
  const nrsStack = new Stack();

  for (let i = N - 1; i >= 0; i--) {
    // balance descending stack
    while (!nrsStack.isEmpty() && heights[i] <= heights[nrsStack.peek()])
      nrsStack.pop();

    nrs[i] = nrsStack.isEmpty() ? N : nrsStack.peek();
    nrsStack.push(i);
  }

  // Calculate the result
  let maxArea = heights[0];
  for (let i = 0; i < N; i++) {
    const height = heights[i];
    const width = nrs[i] - nls[i] - 1;
    const area = height * width;
    maxArea = Math.max(area, maxArea);
  }

  return maxArea;
}

export function largestRectangleArea(heights) {
  const N = heights.length;

  //calculate the nearest left small indexes
  const nls = [];
  const nlsStack = new Stack();
  for (let i = 0; i < N; i++) {
    // balance stack in descending
    while (!nlsStack.isEmpty() && heights[i] <= heights[nlsStack.peek()])
      nlsStack.pop();
    nls[i] = nlsStack.isEmpty() ? -1 : nlsStack.peek();
    nlsStack.push(i);
  }

  // calculate the nearest right small indexes
  const nrs = [];
  const nrsStack = new Stack();
  for (let i = N - 1; i >= 0; i--) {
    // balance stack in descending
    while (!nrsStack.isEmpty() && heights[i] <= heights[nrsStack.peek()])
      nrsStack.pop();
    nrs[i] = nrsStack.isEmpty() ? N : nrsStack.peek();
    nrsStack.push(i);
  }

  // calculate area
  let maxArea = heights[0];
  for (let i = 0; i < N; i++) {
    const height = heights[i];
    const width = nrs[i] - nls[i] - 1;
    const area = width * height;
    maxArea = Math.max(maxArea, area);
  }

  return maxArea;
}
