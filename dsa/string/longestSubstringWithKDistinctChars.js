const longestSubstringWithKDistinctChars = (str, k) => {
  let left = 0;
  let longest = 0;
  const map = new Map();

  for (let i = 0; i < str.length; i++) {
    const key = str[i];
    map.set(key, (map.get(key) || 0) + 1);

    while (map.size > k) {
      const leftChar = str[left];
      const leftValue = map.get(leftChar);

      if (leftValue === 1) {
        map.delete(leftChar);
      } else {
        map.set(leftChar, leftValue - 1);
      }
      left++;
    }

    longest = Math.max(longest, i - left + 1);
  }

  return longest;
};

console.log(longestSubstringWithKDistinctChars("eceba", 2));
