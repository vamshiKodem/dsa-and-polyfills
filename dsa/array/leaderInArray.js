const arr = [16, 17, 4, 3, 5, 2];

const find = (arr) => {
  const output = [arr[arr.length - 1]];
  let maxNumber = arr[arr.length - 1];
  for (let i = arr.length - 2; i >= 0; i--) {
    if (arr[i] > maxNumber) {
      output.push(arr[i]);
      maxNumber = arr[i];
    }
  }
  return output;
};

console.log(find(arr));
// [17, 5, 2]
