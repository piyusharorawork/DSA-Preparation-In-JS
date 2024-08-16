export function insert(intervals, newInterval) {
  const result = [];
  for (const interval of intervals) {
    const [currentStart, currentEnd] = interval;
    const [newStart, newEnd] = newInterval;

    // When the current interval lies completely before new interval
    if (currentEnd < newStart) {
      result.push(interval);
    }

    // When the current interval lies completely after new interval
    else if (currentStart > newEnd) {
      if (newStart !== null) {
        result.push(newInterval);
        newInterval = [null, null];
      }

      result.push(interval);
    }

    // When there is some overlap between current interval and new interval
    else {
      newInterval = [
        Math.min(currentStart, newStart),
        Math.max(currentEnd, newEnd),
      ];
    }
  }

  if (newInterval[0] !== null) {
    result.push(newInterval);
  }

  return result;
}
