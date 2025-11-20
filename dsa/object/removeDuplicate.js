const array = [
  { id: 1, name: "A" },
  { id: 2, name: "B" },
  { id: 1, name: "C" },
  { id: 1, name: "A" },
];

const uniqueByKey = (array, key) => {
  const output = [];
  const seen = new Set();
  for (let i = 0; i < array.length; i++) {
    if (!seen.has(array[i][key])) {
      seen.add(array[i][key], 1);
      output.push(array[i]);
    }
  }
  return output;
};

console.log(uniqueByKey(array, "id"));

// Expected →
// [
//   { id: 1, name: "A" },
//   { id: 2, name: "B" }
// ]
