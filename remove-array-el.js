const arr = [1, 1, 4];
const arr2 = [1, 1, 1, 3, 5, 6];
const arr3 = [3, 3, 5, 8, 9, 8];

function removeElement(nums, el) {
  for (let i = 0; i < nums.length; i++) {
    console.log(nums[i], el);

    if (nums[i] === el) {
      nums.splice(i--, 1);
    }
  }

  return nums;
}

// console.log(removeElement(arr, 1));
console.log(removeElement(arr3, 8));

