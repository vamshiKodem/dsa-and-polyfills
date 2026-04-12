const obj = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
    },
  },
};

const traverse = (obj) => {
  for (let key in obj) {
    if (typeof obj[key] === "object" && obj[key] !== null) {
      traverse(obj[key]);
    } else {
      console.log(key, obj[key]);
    }
  }
};
traverse(obj);
