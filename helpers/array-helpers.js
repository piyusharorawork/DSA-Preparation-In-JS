export function arraysMatch(arr1, arr2) {
  // First, check if the lengths of the outer arrays are different
  if (arr1.length !== arr2.length) {
    return false;
  }

  // Helper function to sort an array of arrays
  const sortArray = (arr) =>
    arr.map((subArr) => subArr.slice().sort((a, b) => a - b)).sort();

  // Sort both arrays
  const sortedArr1 = sortArray(arr1);
  const sortedArr2 = sortArray(arr2);

  // Compare the sorted arrays
  for (let i = 0; i < sortedArr1.length; i++) {
    const subArr1 = sortedArr1[i];
    const subArr2 = sortedArr2[i];

    // Check if the lengths of the sub-arrays are different
    if (subArr1.length !== subArr2.length) {
      return false;
    }

    // Compare the contents of each sub-array
    for (let j = 0; j < subArr1.length; j++) {
      if (subArr1[j] !== subArr2[j]) {
        return false;
      }
    }
  }

  // If all checks passed, the arrays match
  return true;
}

export function stringArrayMatch(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  arr1.sort();
  arr2.sort();

  arr1 = arr1.map((item) => item.split("").sort().join(""));
  arr2 = arr1.map((item) => item.split("").sort().join(""));

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}
