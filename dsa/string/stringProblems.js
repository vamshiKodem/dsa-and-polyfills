// This file contains mostly asked string dsa questions

// Reverse Words in a String III
const reverseWord = (word) => {
  const wordArray = word.split(" ");
  const newArray = [];

  for (let i = 0; i < wordArray.length; i++) {
    let currentWord = wordArray[i].split("");
    let leftPointer = 0;
    let rightPointer = currentWord.length - 1;

    while (leftPointer < rightPointer) {
      let tempNode = currentWord[leftPointer];
      currentWord[leftPointer] = currentWord[rightPointer];
      currentWord[rightPointer] = tempNode;
      leftPointer++;
      rightPointer--;
    }
    newArray.push(currentWord.join(""));
  }
  return newArray.join(" ");
};

// console.log(reverseWord("s'teL ekat edoCteeL tsetnoc"));

// 844. Backspace String Compare
const backspaceCompare = (s, t) => {
  const helper = (str) => {
    let newString = "";
    for (let i = 0; i < str.length; i++) {
      if (str[i] === "#") {
        newString = newString.slice(0, -1);
      } else {
        newString = newString + str[i];
      }
    }
    return newString;
  };
  return helper(s) === helper(t) ? true : false;
};
// console.log(backspaceCompare("ab#c", "ad#cas##"));


const str = 'React Native Developer';

const reverse = str => {
  let output = '';
  let key = '';
  for (let i = str.length - 1; i >= 0; i--) {
    if (str[i] === ' ') {
      output = output + ' ' + key;
      key = '';
    } else {
      key = str[i] + key;
    }
  }

  output = output + ' ' + key;
  return output;
};

console.log(reverse(str));
//  Developer Native React
