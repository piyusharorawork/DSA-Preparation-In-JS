export function binaryMore1Than0V1(n) {
  const result = [];

  const dfs = (count1 = 0, count0 = 0, permutation = []) => {
    if (permutation.length === n) result.push(permutation.join(""));
    else {
      if (count1 < n) {
        permutation.push("1");
        dfs(count1 + 1, count0, permutation);
        permutation.pop();
      }

      if (count0 < n && count0 < count1) {
        permutation.push("0");
        dfs(count1, count0 + 1, permutation);
        permutation.pop();
      }
    }
  };

  dfs();
  return result;
}

export function binaryMore1Than0(n) {
  const result = [];
  const dfs = (zeroCount = 0, oneCount = 0, permutation = []) => {
    if (zeroCount + oneCount === n) result.push(permutation.join(""));
    else {
      if (oneCount < n) {
        permutation.push("1");
        dfs(zeroCount, oneCount + 1, permutation);
        permutation.pop();
      }

      if (zeroCount < oneCount) {
        permutation.push("0");
        dfs(zeroCount + 1, oneCount, permutation);
        permutation.pop();
      }
    }
  };
  dfs();
  return result;
}
