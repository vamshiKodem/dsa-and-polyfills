// This file contains mostly asked polyfill for array methods

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Polyfill for map
Array.prototype.myMap = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    const result = cb.call(this, this[i]);
    output.push(result);
  }
  return output;
};

// console.log(number.myMap((val) => val * 10));

Array.prototype.myForEach = function (cb) {
  for (let i = 0; i < this.length; i++) {
    cb.call(this, this[i]);
  }
};

// number.myForEach((val) => console.log(val * 10));

// Polyfill for filter
Array.prototype.myFilter = function (cb) {
  const output = [];
  for (let i = 0; i < this.length; i++) {
    const isValid = cb.call(this, this[i]);
    if (isValid) {
      output.push(this[i]);
    }
  }
  return output;
};

// console.log(number.myFilter((val) => val >= 5));

// Polyfill for reduce
Array.prototype.myReduce = function (cb, initialValue) {
  let acc = initialValue ? initialValue : this[0];
  for (let i = initialValue ? 0 : 1; i < this.length; i++) {
    acc = cb.call(this, acc, this[i]);
  }
  return acc;
};
console.log(number.reduce((acc, curr) => acc + curr, 0));
console.log(number.myReduce((acc, curr) => acc + curr));

Array.prototype.myPush = function (...args) {
  for (let i = 0; i < args.length; i++) {
    this[this.length] = args[i];
  }
};
// console.log(number.myPush(10, 11));

Array.prototype.myPop = function () {
  const currentValue = this[this.length - 1];
  this[this.length - 1] = undefined;
  this.length--;
  return currentValue;
};

// numbers.myPop();

// Flat Array
Array.prototype.myFlat = function (depth) {
  const flat = (arr, depth) => {
    let output = [];
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i]) && depth > 0) {
        output = output.concat(flat(arr[i], depth - 1));
      } else {
        output.push(arr[i]);
      }
    }
    return output;
  };

  return flat(this, depth);
};

const arr = [1, 2, [3, 4, 5, [6, 7, [2, 2, [3, 3]]], 3], 2, 2];
console.log(arr.myFlat(2));
