const obj1 = { a: 1, b: 2, z: { c: 2, k: 2 } };
const obj2 = { b: 3, c: 4, z: { c: 200, z: 6 } };

const isObject = (val) => val && typeof val === "object";

const merge = (obj1, obj2) => {
  const output = { ...obj1 };

  for (let key in obj2) {
    if (isObject(obj2[key]) && isObject(output[key])) {
      output[key] = merge(output[key], obj2[key]);
    } else {
      output[key] = obj2[key];
    }
  }
  return output;
};

console.log(merge(obj1, obj2));
