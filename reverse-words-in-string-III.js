let a = "Let's take LeetCode contest";

let b = a.split(' ').map(word => word.split('').reverse().join(''));
console.log(b.join(' '));