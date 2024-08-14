export function getPivotPoint(array) {
  const N = array.length;

  if (N === 0) {
    return -1;
  }

  if (N === 1) {
    return 0;
  }

  let left = 0;
  let right = N - 1;

  // we dont need to handle for 1 element
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // pivot must be in right
    if (array[mid] > array[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}
