// O(n2)
export function maxAreaV1(height) {
  const N = height.length;
  let res = 0;

  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      const leftHeight = height[i];
      const rightHeight = height[j];

      const minHeight = Math.min(leftHeight, rightHeight);
      const width = j - i;
      const area = width * minHeight;
      res = Math.max(area, res);
    }
  }

  return res;
}

export function maxAreaV2(height) {
  const N = height.length;
  let res = 0;

  // This will be the widest rectangle while should be our candidate
  let left = 0;
  let right = N - 1;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    const minHeight = Math.min(leftHeight, rightHeight);
    const width = right - left;
    const area = width * minHeight;
    res = Math.max(area, res);

    // when left height is smaller than right
    // only those element which have greater height than height[left]
    // is our next candidate
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }

  return res;
}

export function maxArea(height) {
  const N = height.length;

  // to store maximum area
  let result = 0;

  let left = 0;
  let right = N - 1;

  while (left < right) {
    const leftHeight = height[left];
    const rightHeight = height[right];
    const minHeight = Math.min(leftHeight, rightHeight);
    const width = right - left;
    const area = width * minHeight;
    result = Math.max(result, area);

    if (leftHeight < rightHeight) left++;
    else right--;
  }

  return result;
}
