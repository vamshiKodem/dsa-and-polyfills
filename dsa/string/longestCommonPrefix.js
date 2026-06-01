const longestCommonPrefix = (strs) => {
  let first = strs[0];
  for (let i = 1; i < strs.length; i++) {
    const str = strs[i];
    for (let j = 0; j < str.length; j++) {
      if (first[j] !== str[j]) {
        first = first.slice(0, j);
        break;
      }
    }
  }
  return first;
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
