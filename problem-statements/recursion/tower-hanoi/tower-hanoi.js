export function towerHanoi(n) {
  const result = [];

  const solve = (n, source, dst, helper) => {
    if (n === 1) {
      result.push(`Disk ${n} moved from ${source} to ${dst}`);
      return;
    }

    solve(n - 1, source, helper, dst);
    result.push(`Disk ${n} moved from ${source} to ${dst}`);
    solve(n - 1, helper, dst, source);
  };

  solve(n, "A", "C", "B");

  return result;
}
