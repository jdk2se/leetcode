var romanToInt = function(s) {
    
    const map = {
      I: 1,
      V: 5,
      X: 10,
      L: 50,
      C: 100,
      D: 500,
      M: 1000
    };
  
    let sum = 0;
  
    for (let i = s.length - 1; i >= 0; i--) {
      let current = Number(map[s[i]]);
      let prevVal = i + 1 > s.length ? null : Number(map[s[i + 1]]);
      sum = null !== prevVal && current < prevVal ? sum - current : sum + current;
    }
  
    return sum;
  };