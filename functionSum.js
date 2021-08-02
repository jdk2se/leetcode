function sum(a) {
  return function (b) {
    if (undefined !== b) {
      return sum(a + b);
    }

    return a;
  };
}

console.log(sum(1)(2)(3)());


const sum2 = (a) => (b) => b ? sum2(a+b) : a;
console.log(sum2(3)(4)(5)())