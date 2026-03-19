const deepClone = (obj) => {
  const output = {};

  for(let key in obj){
    if(typeof obj[key] === 'object'){
      output[key] =  {...deepClone(obj[key])}
    } else {
      output[key] = obj[key]
    }
  }
  return output;
}

const obj = {a:1,b:{c:2}};
const clone = deepClone(obj);
console.log(clone); // {a:1,b:{c:2}}
console.log(clone !== obj && clone.b !== obj.b); // true
