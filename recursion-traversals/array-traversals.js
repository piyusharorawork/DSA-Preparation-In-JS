// Print index without let variable
function printIndex(nums, i = 0) {
  if (i === nums.length) return;

  console.log(nums[i]); // operations before loop is a forward pass
  printIndex(nums, i + 1);
}

// print index in reverse without let variable
function printIndexReverese(nums, i = 0) {
  if (i === nums.length) return;

  printIndexReverese(nums, i + 1);
  console.log(nums[i]); // operations after loop is a backward pass
}

//printIndex([1, 2, 3, 4, 5, 6, 7]);
printIndexReverese([1, 2, 3, 4, 5, 6, 7]);
