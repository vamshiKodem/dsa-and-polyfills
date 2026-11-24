const subStringSum = (nums, k) => {
    let output = 0;

    for(let i = 0; i < nums.length; i++){
        let sum = 0;

        for(let j = i; j < nums.length; j++){
            sum = sum + nums[j];

            if(sum === k){
                output++;
            }
        }
    }
    return output;
}

console.log(subStringSum([1, 2, 3], 3))

// Only for positive
const subStringSum = (nums, k) => {
    let output = 0;
    let left = 0;
    let sum = 0;

    for(let i = 0; i < nums.length; i++){
        sum = sum + nums[i];

        while(sum > k && left <= i){
            sum = sum - nums[left];
            left++;
        }

        if(sum === k){
            output++;
        }
    }
    return output;
}

console.log(subStringSum([1, 2, 3], 3))
