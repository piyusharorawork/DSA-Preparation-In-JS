// Using inbuilt sort
export function sortColorsV1(nums) {
  return nums.sort((a, b) => a - b);
}

// Using bubble sort
export function sortColorsV2(nums) {
  const N = nums.length;
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      if (nums[j - 1] > nums[j])
        [nums[j - 1], nums[j]] = [nums[j], nums[j - 1]];
    }
  }
  return nums;
}

// Using selection sort
export function sortColorsV3(nums) {
  const N = nums.length;
  for (let i = 0; i < N; i++) {
    for (let j = i + 1; j < N; j++) {
      if (nums[j] < nums[i]) [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  }
  return nums;
}

// Using insert sort
export function sortColorsV4(nums) {
  const N = nums.length;
  for (let i = 0; i < N; i++) {
    let j = i + 1;
    while (j >= 0) {
      if (nums[j] < nums[j - 1])
        [nums[j], nums[j - 1]] = [nums[j - 1], nums[j]];
      j--;
    }
  }
  return nums;
}

// O(N)
export function sortColors(nums) {
  const N = nums.length;
  let left = 0;
  let right = N - 1;

  const swap = (i, j) => {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
  };

  // Move all 0 to left
  while (left < right) {
    if (nums[left] === 0) {
      left++;
      continue;
    }
    if (nums[right] !== 0) {
      right--;
      continue;
    }

    swap(left, right);
    left++;
    right--;
  }

  // Move all 2 to right
  left = 0;
  right = N - 1;

  // Move all 2 to right
  while (left < right) {
    if (nums[left] !== 2) {
      left++;
      continue;
    }
    if (nums[right] === 2) {
      right--;
      continue;
    }

    swap(left, right);
    left++;
    right--;
  }

  return nums;
}
