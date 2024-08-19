export function combinationSum(candidates, target) {
  const N = candidates.length;

  candidates.sort((a, b) => a - b);

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
