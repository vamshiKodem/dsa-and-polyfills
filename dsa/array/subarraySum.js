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

