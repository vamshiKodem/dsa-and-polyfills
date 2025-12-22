const groupAnagrams = (strs) => {
  const sortedStrs = strs.map((str) => str.split("").sort().join(""));
  const obj = {};

  for (let i = 0; i < strs.length; i++) {
    if (sortedStrs[i] in obj) {
      obj[sortedStrs[i]].push(strs[i]);
    } else {
      obj[sortedStrs[i]] = [strs[i]];
    }
  }
  return Object.values(obj);
};

// Test the function
const input = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(input));
