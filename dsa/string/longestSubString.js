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

const longestSubstringChar = (str) => {
  let left = 0;
  const lastseen = {};
  let window = "";
  let output = "";

  for (let i = 0; i < str.length; i++) {
    while (str[i] in lastseen) {
      window = window.slice(1);
      delete lastseen[str[left]];
      left++;
    }

    lastseen[str[i]] = 1;
    window = window + str[i];

    if (window.length > output.length) {
      output = window;
    }
  }

  return output;
};

console.log(longestSubstringChar("abcabcbb"));
