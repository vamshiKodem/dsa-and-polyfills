const obj1 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
    country: null,
  },
};

const obj2 = {
  name: "John",
  age: 30,
  address: {
    city: "New York",
    zip: "10001",
    country: null,
  },
};

const deepEqual = (obj1, obj2) => {
  if (obj1 === obj2) return true;

  if (
    obj1 === null ||
    obj2 === null ||
    typeof obj1 !== "object" ||
    typeof obj2 !== "object"
  ) {
    return false;
  }

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);
  for (let i = 0; i < keys1.length; i++) {
    const key = keys1[i];
    if (!(key in obj2)) return false;
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
};

console.log(deepEqual(obj1, obj2));
