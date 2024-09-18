export function safePositionV1(n, k) {
  const nums = new Array(n).fill(0).map((_, index) => index + 1);

  const dfs = (startIndex = 0) => {
    const N = nums.length;
    if (N === 1) return nums[0];

    const indexToRemove = (startIndex + k - 1) % N;
    nums.splice(indexToRemove, 1);

    return dfs(indexToRemove);
  };

  return dfs();
}

export function safePosition(n, k) {
  // create persons array from 1 => n
  const persons = new Array(n).fill(0).map((_, index) => index + 1);

  const solve = (start = 0) => {
    const personCount = persons.length;

    // if only 1 person is remaining
    if (personCount === 1) return persons[0];

    const personIndexToRemove = (start + k - 1) % personCount;
    // kill the person
    persons.splice(personIndexToRemove, 1);

    // now that the person is removed
    // we will have a next person in the same position
    // so we can start from there
    return solve(personIndexToRemove);
  };

  return solve();
}
