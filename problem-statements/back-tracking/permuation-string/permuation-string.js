// Only recursion using input output method
export function permuationStringV1(s) {
  const result = [];

  s = s.split("").sort().join("");

  const permute = (input = s, output = "") => {
    if (input.length === 0) {
      result.push(output);
      return;
    }

    for (let i = 0; i < input.length; i++) {
      if (i > 0 && input[i] === input[i - 1]) continue;

      const newInput = input.substring(0, i) + input.substring(i + 1);
      const newOutput = output + input[i];
      permute(newInput, newOutput);
    }
  };
  permute();

  return result;
}

// Without sort and using set
export function permuationStringV2(s) {
  const result = [];
  const permute = (input = s, output = "") => {
    if (input.length === 0) {
      result.push(output);
      return;
    }

    const charSet = new Set();

    for (let i = 0; i < input.length; i++) {
      if (charSet.has(input[i])) continue;

      charSet.add(input[i]);

      const newInput = input.substring(0, i) + input.substring(i + 1);
      const newOutput = output + input[i];
      permute(newInput, newOutput);
    }
  };
  permute();

  return result;
}

// Using back track
export function permuationStringV3(s) {
  const N = s.length;
  const result = [];

  // Swap function that works on an array of characters
  const swap = (permutation, i, j) => {
    const temp = permutation[i];
    permutation[i] = permutation[j];
    permutation[j] = temp;
  };

  const backTrack = (permutation = [], start = 0) => {
    if (start === N) {
      // Fix base case to include all characters
      result.push(permutation.join(""));
      return;
    }

    const used = new Set();

    for (let i = start; i < N; i++) {
      // Skip duplicates
      if (used.has(permutation[i])) continue;
      used.add(permutation[i]);

      swap(permutation, i, start);
      backTrack(permutation, start + 1);
      swap(permutation, i, start); // Backtrack
    }
  };

  const permutation = s.split("");

  backTrack(permutation);

  return result;
}

export function permuationString(s) {
  const N = s.length;
  // to store list of permutations
  const result = [];

  const swap = (permutation, i, j) => {
    [permutation[i], permutation[j]] = [permutation[j], permutation[i]];
  };

  // back tracking
  const backTrack = (permutation, start = 0) => {
    if (start === N - 1) {
      result.push(permutation.join(""));
      return;
    }

    const processedChars = new Set();

    for (let i = start; i < N; i++) {
      if (processedChars.has(permutation[i])) continue; // already processed
      processedChars.add(permutation[i]);
      swap(permutation, i, start);
      backTrack(permutation, start + 1);
      swap(permutation, i, start);
    }
  };

  // We need to pass by reference
  backTrack(s.split(""));

  return result;
}
