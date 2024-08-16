// Print index without let variable
function printIndex(nums, i = 0) {
  if (i === nums.length) return; // Termination

  console.log(nums[i]); // Operation
  printIndex(nums, i + 1); // Recursion
}

// print index in reverse without let variable
function printIndexReverese(nums, i = 0) {
  if (i === nums.length) return; // Termination

  printIndexReverese(nums, i + 1); // Recursion
  console.log(nums[i]); // Operation
}

//printIndex([1, 2, 3, 4, 5, 6, 7]);
printIndexReverese([1, 2, 3, 4, 5, 6, 7]);
