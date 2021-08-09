const arr1 = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];
const arr2 = [9,9,9];

const calc = (digits) => {
  let lastIndex = digits.length - 1;

  for (let i = lastIndex; i >= 0; i--) {
    if (9 !== digits[i]) {
      digits[i] += 1;
      return digits;
    }

    digits[i] = 0;

    if (i === 0) {
      digits.unshift(1);
    }
  }
  
  return digits;
};

console.log(calc(arr2));