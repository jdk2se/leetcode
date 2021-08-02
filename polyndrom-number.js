const num1 = 121;
const num2 = -121;
const num3 = 1221;

const isNumberPolyndrom = (x) => {
  if (x < 0) return false;
  if (x % 10 === 0) return false;
  if (x < 10) return true;

  let rev = 0;

  while (x > rev) {
    rev *= 10;
    rev += x % 10;
    x = Math.trunc(x / 10);
  }

  return x === rev || x === Math.trunc(rev / 10);
};

console.log(isNumberPolyndrom(num1));
