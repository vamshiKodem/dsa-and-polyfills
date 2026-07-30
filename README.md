# Dsa & Polyfill

This repo contains the easy and medium solutions for the dsa for Arrays and Strings using javascript and also polyfills.

# Frontend / Fullstack DSA Preparation (7 YOE)

## Arrays & Hashing

- Two Sum (completed)
- Contains Duplicate (completed)
- Product of Array Except Self
- Subarray Sum Equals K (completed)
- Maximum Subarray (Kadane’s Algorithm) (Completed)
- Merge Intervals (Not required for frontend)
- Insert Interval (Not required for frontend)

## Strings

- Longest Substring Without Repeating Characters (completed)
- Valid Anagram (completed)
- Group Anagrams (completed)
- String Compression (Completed)
- Reverse Words in a String
- Valid Palindrome (ignore special characters)

## Sliding Window / Two Pointers

- Longest Substring Without Repeating Characters (completed)
- Minimum Window Substring (Not required for frontend)
- Container With Most Water (Not required for frontend)
- Move Zeroes (Completed)
- Remove Duplicates from Sorted Array (completed)

## Stack & Queue

- Valid Parentheses (Completed)
- Min Stack (Not required for frontend)
- Next Greater Element (Not required for frontend)
- Evaluate Reverse Polish Notation (Completed)

## Recursion / Object Manipulation (JS Focus)

- Deep Clone Object (Completed)
- Flatten Nested Object (Completed)
- Flatten Array (completed)
- Nested Object Traversal (Completed)

## Heap / Priority Queue

- Top K Frequent Elements (Completed)

---

# JavaScript-Specific (Frontend Focus)

## Core JS Logic

- Debounce (completed)
- Throttle (completed)
- Memoization Function (completed)

## Promises

- Promise.all (completed)
- Promise.race (completed)
- Promise.any (bonus) (completed)

## Objects & Utilities

- Deep Equal Function (completed)
- Event Emitter
- Object Flattening (completed)

---

# High Priority (Must Do)

- Longest Substring Without Repeating Characters
- Subarray Sum Equals K
- Merge Intervals
- LRU Cache
- Deep Clone Object
- Flatten Object / Array
- Number of Islands
- Binary Tree Level Order Traversal
- Reverse Linked List
- Valid Parentheses
- Top K Frequent Elements

# Thing to look imp

- How do you debug the app when app is crashing only in the physical device not on the simulator or emulator. Native approach
- Write code for async storage fetch from the api and save locally
- SBOM
```
function ApiCache() {

    const map = new Map();

    function set(key, value, duration){
        map.set(key, {value: value, time: Date.now(), duration: duration })
    }

    function get(key){
        const data = map.get(key);
        if( Date.now() - data.time < data.duration){
            return data.value;
        }
        map.delete(key);
        return null;
    }

    return {
        set, get
    }

}

const cache = new ApiCache();
cache.set("user_101", { name: "Ankush" }, 5000);
cache.get("user_101");
// returns { name: "Ankush" } if called within 5 seconds
// after 5 seconds
console.log(cache.get("user_101")); // returns null
setTimeout(() => {
    console.log(cache.get("user_101"))
}, 4900)<img width="966" height="1148" alt="image" src="https://github.com/user-attachments/assets/e93a49ce-3030-4d7a-8abe-f78e00b658d0" />

```


- PascalTriangle.js
- arrayProblems.js
- canJump.js
- combinationSum.js
- combine.js
- evalRPN.js
- findSecondLargest.js
- flatObject.js
- intersection.js
- leaderInArray.js
- majorityElement.js
- maxProfilt.js
- maxProfit2.js
- maxSubArray.js
- mergeSortedArray.js
- mergeSortedArray2.js
- minSubArrayLength.js
- moveZeroes.js
- productExceptSelf.js
- removeDuplicates.js
- removeDuplicatesSorted2.js
- removeDuplicatesSortedArray.js
- removeElement.js
- rotateArray.js
- topKFrequent.js
- twoSum.js
- factorial.js
- missingNumber.js
- moveZeros.js
- calculateSum.js
- compareObject.js
- deepClone.js
- deepEqual.js
- mergeTwoObject.js
- removeDuplicate.js
- traverse.js
- debouncing.js
- memoization.js
- multipleFetch.js
- throttling.js
- compressString.js
- countVowels.js
- firstNonRepeatingCharacter.js
- groupAnagrams.js
- isAnagram.js
- isLongestPalindrome.js
- longestCommonPrefix.js
- longestSubString.js
- longestSubstringWithKDistinctChars.js
- maxFrequentChar.js
- palindrome.js
- reverseString.js
- sortByFrequency.js
- stringProblems.js
- validAnagram.js
- validParentheses.js
- aggregateLogsByDate.js
- currying.js
- getFilteredProducts.js
- interviewQuestions.js
- localStorage.js
- lruCache.js

I am frontend dev with 7YOE (React native, react js and node js) mostly frontend is the list dsa is enough for frontend mostly light medium dsa
