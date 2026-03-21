const compressString = (str) => {
  let output = '';
  let counter = 1;

  for(let i = 0; i < str.length; i++){
    if(i < str.length - 1 && str[i] === str[i + 1]){
      counter++;
    } else {
      output = output + str[i];
      if(counter > 1){
        output = output + counter;
        counter = 1;
      }
    }
  }
  return output;
}

console.log(compressString("aaabbc")); // a3b2c
console.log(compressString("aaabcccdddde")); // Output: "a3bc3d4e"
