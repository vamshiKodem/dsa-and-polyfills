// Longest Consecutive Sequence

const longestConsecutive = (numbs) => {
  let longest = 0;
  for (let i = 0; i < numbs.length; i++) {
    let current = numbs[i];
    let count = 1;
    while (contain(numbs, current + 1)) {
      current++;
      count++;
    }
    longest = Math.max(longest, count);
  }

  return longest;
};

const contain = (numbs, target) => {
  for (let curr of numbs) {
    if (curr === target) {
      return true;
    }
  }
  return false;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));

// Optimal
const longestConsecutive = (numbers) => {
  let longest = 0;
  const set = new Set(numbers);

  for (let i = 0; i < numbers.length; i++) {
    let current = numbers[i];
    let length = 1;

    while (set.has(current + 1)) {
      current++;
      length++;
    }

    longest = Math.max(longest, length);
  }

  return longest;
};

console.log(longestConsecutive([100, 4, 200, 1, 3, 2]));
