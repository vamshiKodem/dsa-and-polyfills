// 80. Remove Duplicates from Sorted Array II

const nums = [1, 1, 1, 2, 2, 3];

const removeDuplicatesSorted2 = (nums) => {
  let k = 0;
  let counter = 0;
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    if (i === 0 || nums[i] !== nums[i - 1]) {
      counter = 1;
    } else {
      counter++;
    }

    if (counter <= 2) {
      nums[k] = num;
      k++;
    }
  }
  return k;
};

console.log(removeDuplicatesSorted2(nums));
