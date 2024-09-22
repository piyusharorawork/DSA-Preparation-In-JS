const array = [1, 2, 3, 4];

// To remove the element from beg
array.shift(); // O(n)
console.log(array); // [2,3,4]

// To remove the element from end
array.unshift(100); // O(n)
console.log(array); // [100,2,3,4]

// To insert the element at a specific index
array.splice(3, 0, 31); // O(n)
console.log(array); // [100,2,3,31,4]

// To get the portion of array starting from index 2 to end
console.log(array.slice(2)); // [3,31,4]

// To get the portion of array starting from index 2 to 4
console.log(array.slice(2, 4)); // [3,31,4]
