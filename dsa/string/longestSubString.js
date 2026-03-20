// 3. Longest Substring Without Repeating Characters (M)
// using sliding window

const str = "pwwkezrtyuiow";

const longestSubString = (str) => {
  let left = 0;
  let maxLength = 0;
  const map = new Map();
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    while (map.has(current)) {
      map.delete(str[left]);
      left++;
    }
    map.set(current, 1);
    maxLength = Math.max(maxLength, map.size);
  }
  return maxLength;
};

console.log(longestSubString(str));
