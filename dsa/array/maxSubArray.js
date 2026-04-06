// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum, and return that sum.

const nums = [1, 2, 3, 4];

const maxSubArray = (nums) => {
  let sum = nums[0];
  let currentSum = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentSum = Math.max(currentSum, currentSum + nums[i]);
    sum = Math.max(currentSum, sum);
  }
  return sum;
};

console.log(maxSubArray(nums)); // 10
console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4])); // 6 ([4,-1,2,1])
console.log(maxSubArray([1, 2, 3, 4])); // 10 ([1,2,3,4])
console.log(maxSubArray([-1, -2, -3])); // -1 ([-1])
