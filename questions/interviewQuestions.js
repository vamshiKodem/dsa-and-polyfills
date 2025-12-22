const data = {
  a: {
    a: "a",
    b: 1,
  },
  b: {
    b: 1,
  },
  c: {
    c: {
      e: "e",
      b: {
        c: "c",
        a: 1,
        z: [1, 1, 1, { r: 100 }],
      },
    },
  },
};

let sum = 0;
const sumCalculate = (data) => {
  if (typeof data === "number") {
    sum = sum + data;
  } else if (typeof data === "object" && !Array.isArray(data)) {
    for (let key in data) {
      sumCalculate(data[key]);
    }
  } else if (typeof data === "object" && Array.isArray(data)) {
    for (let i = 0; i < data.length; i++) {
      sumCalculate(data[i]);
    }
  }
  return sum;
};

console.log(sumCalculate(data));

const arr = [
  "He said he was not there yesterday; however, many people saw him there.",
  "The small white buoys marked the location of hundreds of crab pots.",
  "My uncle's favorite pastime was building cars out of noodles.",
  "The beauty of the African sunset disguised the danger lurking nearby.",
  "There aren't enough towels in the world to stop the sewage flowing from his mouth.",
  "He swore he just saw his sushi move.",
  "The light that burns twice as bright burns half as long.",
  "Potato wedges probably are not best for relationships.",
  "When he asked her favorite number, she answered without hesitation that it was diamonds.",
  "When he had to picnic on the beach, he purposely put sand in other people food.",
];

const pick = (arr) => {
  const hash = {};
  for (let i = 0; i < arr.length; i++) {
    const arrStr = arr[i].split(" ");
    for (let j = 0; j < arrStr.length; j++) {
      if (hash[arrStr[i]]) {
        hash[arrStr[i]]++;
      } else {
        hash[arrStr[i]] = 1;
      }
    }
  }

  const data = Object.entries(hash)
    .map((data) => {
      return { word: data[0], times: data[1] };
    })
    .sort((a, b) => b.times - a.times);
  return data.slice(0, 5);
};

console.log(pick(arr));

const input = {
  A: (a, b, c) => a + b + c,
  B: (a, b, c) => a - b - c,
  C: (a, b, c) => a * b - c,
  D: { E: (a, b, c) => a * b * c },
};

const compute = (obj, a, b, c) => {
  const output = {};
  for (let key in obj) {
    if (typeof obj[key] === "function") {
      output[key] = obj[key](a, b, c);
    } else if (typeof obj[key] === "object") {
      output[key] = compute(obj[key], a, b, c);
    }
  }
  return output;
};

console.log(compute(input, 1, 1, 1));
