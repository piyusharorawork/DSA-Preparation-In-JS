export function addSpaces(s, spaces) {
  const M = s.length;
  const N = spaces.length;

  let result = "";
  let n = 0;

  for (let m = 0; m < M; m++) {
    if (n < N && m === spaces[n]) {
      result += " ";
      n++;
    }
    result += s[m];
  }

  return result;
}
