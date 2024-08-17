export function merge(intervals) {
  const N = intervals.length;
  if (N <= 1) return intervals;

  intervals.sort((a, b) => a[0] - b[0]);

  const result = [intervals[0]];

  for (let i = 1; i < N; i++) {
    const [prevStart, prevEnd] = result[result.length - 1];
    const [currStart, currEnd] = intervals[i];

    if (currStart > prevEnd) result.push(intervals[i]);
    else {
      result[result.length - 1] = [
        Math.min(prevStart, currStart),
        Math.max(prevEnd, currEnd),
      ];
    }
  }

  return result;
}
