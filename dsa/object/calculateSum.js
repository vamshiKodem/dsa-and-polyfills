const obj = { a: 1, b: { c: 2, d: 3 } };

const calculateSum = (obj) => {
  let count = 0;
  for (let key in obj) {
    if (obj[key] !== null && typeof obj[key] === "object") {
      count = count + calculateSum(obj[key]);
    } else {
      count = count + obj[key];
    }
  }
  return count;
};

console.log(calculateSum(obj));
