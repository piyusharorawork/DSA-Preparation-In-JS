// Using built in sort
export function findKthLargestV1(nums, k) {
  const N = nums.length;
  const indexToSearch = N - k;

  nums.sort((a, b) => a - b);
  return nums[indexToSearch];
}

// Using merge sort
export function findKthLargestV2(nums, k) {
  const N = nums.length;
  const indexToSearch = N - k;

  // Sort nums using merge sort
  function merge(leftList, rightList) {
    const result = [];
    let l = 0;
    let L = leftList.length;
    let r = 0;
    let R = rightList.length;

    while (l < L && r < R) {
      if (leftList[l] < rightList[r]) result.push(leftList[l++]);
      else result.push(rightList[r++]);
    }
    return result.concat(leftList.slice(l)).concat(rightList.slice(r));
  }

  const mergeSort = (array) => {
    const N = array.length;
    // smaller problem which can be solved
    if (N < 2) return array;

    // Divide the problem into 2 equal sub problems
    const mid = Math.floor(N / 2);
    const leftList = array.slice(0, mid);
    const rightList = array.slice(mid);

    const sortedLeftList = mergeSort(leftList);
    const sortedRightList = mergeSort(rightList);

    const sortedList = merge(sortedLeftList, sortedRightList);
    return sortedList;
  };

  const sorted = mergeSort(nums);

  return sorted[indexToSearch];
}

// Using quick sort
export function findKthLargestV3(nums, k) {
  const N = nums.length;
  const indexToSearch = N - k;

  const sort = () => {
    const N = nums.length;

    const getPartitionIndex = (start, end) => {
      let pivotIndex = start;
      let left = start + 1;
      let right = end;

      while (left <= right) {
        if (nums[left] <= nums[pivotIndex]) left++;
        else if (nums[right] >= nums[pivotIndex]) right--;
        else {
          [nums[left], nums[right]] = [nums[right], nums[left]];
          left++;
          right--;
        }
      }
      [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
      return right;
    };

    const quickSort = (start, end) => {
      if (start >= end) return;
      const partitionIndex = getPartitionIndex(start, end);
      quickSort(start, partitionIndex - 1);
      quickSort(partitionIndex + 1, end);
    };

    quickSort(0, N - 1);
    return nums;
  };

  const sorted = sort(0, N - 1);

  return sorted[indexToSearch];
}

// Using quick select
export function findKthLargestV4(nums, k) {
  const N = nums.length;
  const indexToSearch = N - k;

  const getPartitionIndex = (start, end) => {
    let pivotIndex = start;
    let left = start + 1;
    let right = end;

    while (left <= right) {
      if (nums[left] <= nums[pivotIndex]) left++;
      else if (nums[right] >= nums[pivotIndex]) right--;
      else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
    }
    [nums[pivotIndex], nums[right]] = [nums[right], nums[pivotIndex]];
    return right;
  };

  const quickSelect = (start, end) => {
    const partitionIndex = getPartitionIndex(start, end);
    if (partitionIndex === indexToSearch) return nums[indexToSearch];
    else if (partitionIndex < indexToSearch)
      return quickSelect(partitionIndex + 1, end);
    else return quickSelect(start, partitionIndex - 1);
  };

  return quickSelect(0, N - 1);
}

// Using quick select iteration
export function findKthLargest(nums, k) {
  const N = nums.length;
  const indexToFind = N - k;

  if (N === 1) return nums[0];

  const getPartitionIndex = (start, end) => {
    const pivot = start;
    let left = start + 1;
    let right = end;
    while (left <= right) {
      if (nums[left] <= nums[pivot]) left++;
      else if (nums[right] >= nums[pivot]) right--;
      else {
        [nums[left], nums[right]] = [nums[right], nums[left]];
        left++;
        right--;
      }
    }
    [nums[right], nums[pivot]] = [nums[pivot], nums[right]];
    return right;
  };

  const quickSelect = (start, end) => {
    while (start <= end) {
      const partitionIndex = getPartitionIndex(start, end);
      if (indexToFind === partitionIndex) return nums[partitionIndex];

      if (indexToFind > partitionIndex) start = partitionIndex + 1;
      else end = partitionIndex - 1;
    }
  };

  return quickSelect(0, N - 1);
}
