let s1 = "()";
let s2 = "()[]{}";
let s3 = "(]";
let s4 = "{[]}";
let s5 = "([)}";
let s6 = "{[[]{}]}()";

function isValid(s) {
  let stack = [];
  let brackets = {
    ")": "(",
    "]": "[",
    "}": "{"
  };

  for (let i = 0; i < s.length; i++) {
    const current = s[i];

    if (isClosedBracker(current)) {
      if (brackets[current] !== stack.pop()) return false;
    } else {
      stack.push(current);
    }
  }

  return stack.length === 0;
}

function isClosedBracker(char) {
  return [")", "}", "]"].indexOf(char) > -1;
}

console.log(s1, isValid(s1));
console.log(s6, isValid(s6));
console.log(s5, isValid(s5));
