const str = "A man, a plan, a canal: Panama";

const isPalimdrom = (str) => {
  let res = str.replace(/[^0-9a-z]/gi, "").toLowerCase();
  const rev = res.split("").reverse().join("");

  console.log(res === rev);
};

isPalimdrom(str);
