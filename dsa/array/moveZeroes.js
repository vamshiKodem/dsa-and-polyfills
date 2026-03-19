const moveZeroes = (arr) => {
  let lastNonZeroFoundAt = 0;
  for(let i = 0; i < arr.length; i++){
    if(arr[i] !== 0){
      [arr[i], arr[lastNonZeroFoundAt]] = [arr[lastNonZeroFoundAt], arr[i]];
      lastNonZeroFoundAt++;
    }
  }
  return arr;
}

console.log(moveZeroes([0,1,0,3,12])); // [1,3,12,0,0]
console.log(moveZeroes([0,0,0])); // [0,0,0]
console.log(moveZeroes([1,2,3])); // [1,2,3]
