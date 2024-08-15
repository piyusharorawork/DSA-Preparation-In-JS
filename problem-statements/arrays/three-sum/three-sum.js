export function threeSum(nums) {
  const N = nums.length;

  // array length must be atleast 3 to find a single triplet
  if (N < 3) return [];

  // Sort the array in place
  nums.sort((a, b) => a - b);

  // Final list of tripelets
  const result = [];

  for (let i = 0; i < N - 2; i++) {
    // Skip the outer loops for same elements
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let left = i + 1;
    let right = N - 1;

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        const triplet = [nums[i], nums[left], nums[right]];
        result.push(triplet);

        // skip left which are already part of tripet
        while (left < right && nums[left] === triplet[1]) left++;

        // skip right which are already part of tripet
        while (left < right && nums[right] === triplet[2]) right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }

  return result;
}
