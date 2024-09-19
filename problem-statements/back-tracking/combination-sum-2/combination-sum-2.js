export function combinationSum2(candidates, target) {
  const N = candidates.length;
  const result = [];

  candidates.sort((a, b) => a - b);

  const backTrack = (start = 0, end = N, stack = [], remaining = target) => {
    if (remaining === 0) {
      result.push([...stack]);
    } else if (remaining < 0) {
      return;
    } else {
      for (let i = start; i < end; i++) {
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        stack.push(candidates[i]);
        backTrack(i + 1, end, stack, remaining - candidates[i]);
        stack.pop();
      }
    }
  };

  backTrack();

  return result;
}

export function combinationSum(candidates, target) {
  const N = candidates.length;
  const result = [];

  candidates.sort((a, b) => a - b);

  const backTrack = (start = 0, end = N, stack = [], remaining = target) => {
    if (remaining === 0) {
      result.push([...stack]);
    } else {
      for (let i = start; i < end; i++) {
        if (candidates[i] > remaining) continue;
        if (i > start && candidates[i] === candidates[i - 1]) continue;
        stack.push(candidates[i]);
        backTrack(i + 1, end, stack, remaining - candidates[i]);
        stack.pop();
      }
    }
  };

  backTrack();

  return result;
}
