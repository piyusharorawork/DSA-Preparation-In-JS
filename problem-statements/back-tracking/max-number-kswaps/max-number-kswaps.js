export function maxNumberKswapsV1(s, k) {
  const N = s.length;
  let maxPermutation = s;

  const swap = (arr, i, j) => ([arr[i], arr[j]] = [arr[j], arr[i]]);

  const permutation = s.split("").map((ch) => parseInt(ch));

  const getMax = (index) => {
    let max = permutation[index];
    for (let i = index; i < N; i++) {
      max = Math.max(max, permutation[i]);
    }
    return max;
  };

  const backTrack = (start = 0, swapCount = 0) => {
    if (swapCount > k || start === N) return;

    const currentStr = permutation.join("");

    if (currentStr > maxPermutation) {
      maxPermutation = currentStr;
    }

    let max = getMax(start + 1);

    for (let i = start + 1; i < N; i++) {
      if (permutation[start] < permutation[i] && permutation[i] === max) {
        swap(permutation, i, start);
        backTrack(start + 1, swapCount + 1);
        swap(permutation, i, start);
      }
    }
  };

  backTrack();

  return maxPermutation;
}

export function maxNumberKswaps(s, k) {
  const N = s.length;
  // need to maximise
  let result = s;

  // For back tracking
  const permutation = s.split("").map((ch) => parseInt(ch));

  // helper to swap 2 elements
  const swap = (i, j) =>
    ([permutation[i], permutation[j]] = [permutation[j], permutation[i]]);

  // helper to get the max of remaining elements
  const getMax = (index) => {
    let max = permutation[index];
    for (let i = index; i < N; i++) max = Math.max(max, permutation[i]);
    return max;
  };

  // main backtracking
  const backTrack = (start = 0, swapCount = 0) => {
    if (swapCount > k || start === N) return;

    const permutationStr = permutation.join("");
    if (permutationStr > result) result = permutationStr;

    const max = getMax(start + 1);
    // start +1 as we dont want to waste swap by
    // swapping to itself
    for (let i = start + 1; i < N; i++) {
      if (permutation[start] > max) continue; // no need to swap already max
      if (permutation[i] !== max) continue; // there are other more greater permutations
      swap(i, start);
      backTrack(start + 1, swapCount + 1);
      swap(i, start);
    }
  };

  backTrack();

  return result;
}
