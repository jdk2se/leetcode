let s = "   fly me   to   the moon  ";

const lenghtOfTheLastWord = (s) => {
  // -- v1  
  let a = s.split(' ').filter((word) => word.length > 0);
  a.pop().length;
  
  // -- v2
  let t = s.trim()
      if (!t){
        return 0
    }
    const arr = t.split(" ");
    return arr[arr.length-1].length;
};

lenghtOfTheLastWord(s);