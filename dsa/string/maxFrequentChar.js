// Write a function that takes a string as input and returns the character that appears the most.
//  If multiple characters have the same highest frequency, return the one that appears first.

const mostFrequentChar = (str) => {
  const map = {};
  let max = 0;
  let maxChar = "";

  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    map[char] = map[char] ? map[char] + 1 : 1;
    if (map[char] > max) {
      max = map[char];
      maxChar = char;
    }
  }

  return maxChar;
};

mostFrequentChar("frontend"); // Output: "f"
mostFrequentChar("javascript"); // Output: "a"
mostFrequentChar("css"); // Output: "c"
