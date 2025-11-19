const obj = {
  a: { b: 2, c: { d: 3 } },
  e: 4,
};

const flat = (obj, parentKey, output) => {
  for (let key in obj) {
    const fullKey = parentKey ? `${parentKey}.${key}` : key;
    if (typeof obj[key] === "object") {
      flat(obj[key], key, output);
    } else {
      output[fullKey] = obj[key];
    }
  }

  return output;
};

console.log(flat(obj, "", {}));

// {a.b: 2, c.d: 3, e: 4}
