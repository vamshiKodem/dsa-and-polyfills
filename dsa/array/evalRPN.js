// Evaluate Reverse Polish Notation

const evalRPN = (arr) => {
  const stack = [];
  arr.forEach((val) => {
    if (!isNaN(val)) {
      stack.push(Number(val));
    } else {
      const a = stack.pop();
      const b = stack.pop();

      if (val === "+") {
        stack.push(a + b);
      } else if (val === "-") {
        stack.push(b - a);
      } else if (val === "*") {
        stack.push(a * b);
      } else if (val === "/") {
        stack.push(Math.trunc(b / a));
      }
    }
  });
  return stack.pop();
};

console.log(
  evalRPN([
    "10",
    "6",
    "9",
    "3",
    "+",
    "-11",
    "*",
    "/",
    "*",
    "17",
    "+",
    "5",
    "+",
  ]),
);
