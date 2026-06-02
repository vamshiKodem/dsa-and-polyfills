const isAnagram = (str1, str2) => {
  const hash = {};
  for (let i = 0; i < str1.length; i++) {
    const current = str1[i];
    hash[current] = hash[current] ? hash[current] + 1 : 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const current = str2[i];
    if (!hash[current]) return false;
    hash[current]--;
  }

  for (let key in hash) {
    if (hash[key] !== 0) return false;
  }

  return true;
};

console.log(isAnagram("listene", "silente"));
