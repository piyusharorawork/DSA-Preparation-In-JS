export function letterCombinations(digits) {
  const N = digits.length;
  if (N === 0) return [];

  const result = [];

  const digitMap = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  // pre processing
  const letters = digits.split("").map((digit) => digitMap[digit]);

  const backTrack = (left = 0, end = N, stack = []) => {
    if (stack.length === N) result.push(stack.join(""));
    else {
      for (let i = 0; i < N; i++) {
        for (let j = 0; j < letters[i].length; j++) {
          // Ignore condition
          if (i !== stack.length) continue;
          stack.push(letters[i][j]);
          backTrack(left, end, stack);
          stack.pop();
        }
      }
    }
  };

  backTrack();

  return result;
}
