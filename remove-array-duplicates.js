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

console.log(removeDuplicates(arr2));

// -- Set
const array = ['Alex', 'Jane', 'Mark', 'Jane', 'Melisa', 'Jane'];
const uniqueArraySet1 = [...new Set(array)];
const uniqueArraySet2 = Array.from(new Set(array));
// -- -- -- --


// -- Filter
let debug = [];

const uniqueFilter = array.filter((item, index) => {
  debug.push({item, index, indexOf: array.indexOf(item)})
  return index === array.indexOf(item);
});

console.table(debug);
// -- -- -- --


// -- Reduce
const uniqueReduce = array.reduce((unique, item) => {
  return unique.includes(item) ? unique : [...unique, item];
}, []);

console.log(uniqueReduce);
// -- -- -- --



// -- Remove from sorted array (return number of unique element) O(1)
const nums = [0,0,1,1,1,1,1,2,2,2,2,3,3,4];

const removeDup = (nums) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      nums.splice(i, 1);
      i--;
    }
  }


  return nums.length
};

console.log(removeDup(nums), nums);
// -- -- -- --