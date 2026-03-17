// Compare two objects and return differences.

const oldObject = { a: 1, b: 2 };
const newObject = { a: 1, b: 3, c: 22 };

const findDifference = (oldObj, newObj) => {
  const result = {};

  for (let key in oldObj) {
    if (newObj[key] !== oldObj[key]) {
      result[key] = newObj[key];
    }
  }

  for (let key in newObj) {
    if (!(key in oldObj)) {
      result[key] = newObj[key];
    }
  }

  return result;
};

console.log(findDifference(oldObject, newObject));
// {b: 3, c: 22}
