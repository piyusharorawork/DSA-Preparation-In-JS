export function trap(heights) {
  const N = heights.length;

  //calculate max left
  const maxLeft = new Array(N);
  maxLeft[0] = heights[0];
  for (let i = 1; i < N; i++) {
    maxLeft[i] = Math.max(maxLeft[i - 1], heights[i]);
  }

  // calculate max right
  const maxRight = new Array(N);
  maxRight[N - 1] = heights[N - 1];
  for (let i = N - 2; i >= 0; i--) {
    maxRight[i] = Math.max(maxRight[i + 1], heights[i]);
  }

  // calculate rain water
  let rainWater = 0;
  for (let i = 0; i < N; i++) {
    const boundHeight = Math.min(maxLeft[i], maxRight[i]);
    const water = boundHeight - heights[i];
    rainWater += water;
  }

  return rainWater;
}
