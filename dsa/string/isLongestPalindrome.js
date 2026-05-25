// Given a string s, return the longest palindromic substring in s.Ex1: "babad"ans: "bab"
// Ex2:  "cbbd"ans: "bb"Ex3: "sasas"ans: "sasas"

const isPalindrome = (s) => {
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    if (s[left] !== s[right]) return false;
    left++;
    right--;
  }

  return true;
};

const isLongestPalindrome = (s) => {
  let output = "";
  for (let i = 0; i < s.length; i++) {
    for (let j = i; j < s.length; j++) {
      const substring = s.substring(i, j + 1);
      const isValidPalindrome = isPalindrome(substring);
      if (substring && isValidPalindrome && substring.length > output.length) {
        output = substring;
      }
    }
  }
  return output;
};

console.log(isLongestPalindrome("sasas"));
