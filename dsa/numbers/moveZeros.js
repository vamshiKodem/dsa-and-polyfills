const moveZeroes = nums => {
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      nums[counter] = nums[i];
      counter++;
    }
  }

  while (counter <= nums.length - 1) {
    nums[counter] = 0;
    counter++;
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]
console.log(moveZeroes([0])); // [0]
console.log(moveZeroes([4, 2, 0, 1, 0, 3])); // [4,2,1,3,0,0]
