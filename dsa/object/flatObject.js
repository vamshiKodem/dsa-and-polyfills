const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const flat = (obj, parent, output) => {
  for (let key in obj) {
    const newKey = parent ? `${parent}.${key}` : key;
    if (
      typeof obj[key] === "object" &&
      !Array.isArray(obj[key]) &&
      obj[key] !== null
    ) {
      flat(obj[key], newKey, output);
    } else {
      output[newKey] = obj[key];
    }
  }
  return output;
};
console.log(flat(obj, "", {}));

// {
//   "a": 1,
//   "b.c": 2,
//   "b.d.e": 3
// }
