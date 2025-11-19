const missingNumber = nums => {
  const n = nums.length;
  const expectedSum = (n * (n + 1)) / 2; // sum of 0..n
  const actualSum = nums.reduce((acc, val) => acc + val, 0); // sum of array
  return expectedSum - actualSum;
};

// Test cases
console.log(missingNumber([3, 0, 1])); // 2
console.log(missingNumber([0, 1])); // 2
console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])); // 8
