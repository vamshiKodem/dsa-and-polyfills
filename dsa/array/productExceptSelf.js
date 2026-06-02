const nums = [1, 2, 3, 4];
// Output: [24, 12, 8, 6]

const productExceptSelf = (nums) => {
  const output = [];

  for (let i = 0; i < nums.length; i++) {
    let result = 1;
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        result = result * nums[j];
      }

      if (j === nums.length - 1) {
        output.push(result);
        result = 1;
      }
    }
  }
  return output;
};

console.log(productExceptSelf(nums));
