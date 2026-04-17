// Given an array, return the k most frequent elements.
const nums = [1, 1, 1, 2, 2, 3];
const k = 2;

const topKFrequent = (arr, k) => {
  const map = {};
  for (let i = 0; i < arr.length; i++) {
    if (map[arr[i]]) {
      map[arr[i]]++;
    } else {
      map[arr[i]] = 1;
    }
  }

  const output = Object.keys(map).sort((a, b) => map[b] - map[a]);
  return output.slice(0, k).map(Number);
};
console.log(topKFrequent(nums, k));
