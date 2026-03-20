const obj = { a: 1, b: { c: 2, z: [1, 2, { b: 1 }] } };

const deepClone = (obj) => {
  if (obj === null || typeof obj !== "object") return obj;

  const output = Array.isArray(obj) ? [] : {};

  for (let key in obj) {
    const current = obj[key];
    if (typeof current === "object" && !Array.isArray(current)) {
      output[key] = deepClone(current);
    } else if (typeof current === "object" && Array.isArray(current)) {
      output[key] = current.map((curr) => deepClone(curr));
    } else {
      output[key] = current;
    }
  }

  return output;
};

console.log(deepClone(obj));
