export function combinationSumV1(candidates, target) {
  const N = candidates.length;
  const result = [];

  const backTrack = (start = 0, end = N, stack = [], remaining = target) => {
    if (remaining === 0) {
      result.push([...stack]);
    } else if (remaining < 0) {
      return;
    } else {
      for (let i = start; i < end; i++) {
        stack.push(candidates[i]);
        backTrack(i, end, stack, remaining - candidates[i]);
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

  const backTrack = (start = 0, end = N, stack = [], remaining = target) => {
    if (remaining === 0) {
      result.push([...stack]);
    } else {
      for (let i = start; i < end; i++) {
        if (candidates[i] > remaining) continue;
        stack.push(candidates[i]);
        backTrack(i, end, stack, remaining - candidates[i]);
        stack.pop();
      }
    }
  };

  backTrack();

  return result;
}
