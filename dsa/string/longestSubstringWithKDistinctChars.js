const longest = (str, k) => {
  let left = 0;
  let max = 0;
  const hash = {};
  for (let i = 0; i < str.length; i++) {
    hash[str[i]] = hash[str[i]] ? hash[str[i]] + 1 : 1;

    while (Object.keys(hash).length > k) {
      hash[str[left]]--;
      if (hash[str[left]] === 0) {
        delete hash[str[left]];
      }
      left++;
    }
    max = Math.max(max, i - left + 1);
  }

  return max;
};

console.log(longest("eceba", 2));
