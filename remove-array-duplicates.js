const arr = [1, 1, 4];
const arr2 = [1, 1, 1, 3, 5, 6];
const arr3 = [3, 3, 5, 8, 8];

function removeDuplicates(nums) {
  if (nums.length == 0) return 0;
  
  // for(let i = 1; i < nums.length; i++) {
  //   if (nums[i] === nums[i - 1]) {
  //     nums.splice(i--, 1);
  //   }
  // }

  // return nums;

  return nums.splice(0, nums.length, ...new Set(nums))
}

console.log([...new Set(arr2)]);
console.log(removeDuplicates(arr));
console.log(removeDuplicates(arr2));
