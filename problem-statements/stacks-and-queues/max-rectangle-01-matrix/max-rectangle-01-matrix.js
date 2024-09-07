import { Stack } from "../../../data-structures/stack/stack";

export function maximalRectangleV1(matrix) {
  // convert matrix to histogram
  const R = matrix.length;
  const C = matrix[0].length;

  const N = C;
  const heights = new Array(N).fill(0);
  let maxArea = 0;

  const largestArea = (heights) => {
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
    let maxArea = 0;
    for (let i = 0; i < N; i++) {
      const height = heights[i];
      const width = nrs[i] - nls[i] - 1;
      const area = width * height;
      maxArea = Math.max(maxArea, area);
    }

    return maxArea;
  };

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      heights[c] = matrix[r][c] === "1" ? heights[c] + 1 : 0;
    }

    const area = largestArea(heights);
    maxArea = Math.max(maxArea, area);
  }
  return maxArea;
}

export function maximalRectangle(matrix) {
  const getMaxArea = (heights) => {
    const N = heights.length;

    // nearlest smallest left
    const NSL = [];
    const NSLStack = new Stack();
    for (let i = 0; i < N; i++) {
      // balance with descending order
      while (!NSLStack.isEmpty() && heights[i] <= heights[NSLStack.peek()])
        NSLStack.pop();
      NSL[i] = NSLStack.isEmpty() ? -1 : NSLStack.peek();
      NSLStack.push(i);
    }

    // nearlest smallest right
    const NSR = [];
    const NSRStack = new Stack();
    for (let i = N - 1; i >= 0; i--) {
      // balance with descending order
      while (!NSRStack.isEmpty() && heights[i] <= heights[NSRStack.peek()])
        NSRStack.pop();
      NSR[i] = NSRStack.isEmpty() ? N : NSRStack.peek();
      NSRStack.push(i);
    }

    // calculate maxArea
    let maxArea = 0;
    for (let i = 0; i < N; i++) {
      const height = heights[i];
      const width = NSR[i] - NSL[i] - 1;
      const area = width * height;
      maxArea = Math.max(maxArea, area);
    }

    return maxArea;
  };

  const R = matrix.length;
  const C = matrix[0].length;

  let maxArea = 0;
  const heights = new Array(C).fill(0);
  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      heights[c] = matrix[r][c] === "1" ? heights[c] + 1 : 0;
    }
    // We have processed the row
    const area = getMaxArea(heights);
    maxArea = Math.max(area, maxArea);
  }

  return maxArea;
}
