let arr1 = [1,2,3,4,3,2,1];
let arr2 = [1,2,3,4,5,6,5,4,3,2];
let arr3 = [10,9,8,7,6];
let arr4 = [0,2,1,0];

// O(logN)
const findPeak = (nums) => {
    let mid;
    let left  = 0;
    let right = nums.length - 1;
    
    while (left <= right) {
        mid = Math.round((right - left) / 2 + left);        

        if (nums[mid] > nums[mid - 1] && nums[mid] > nums[mid + 1]) {
            return mid;
        } else if (nums[mid] > nums[mid - 1] && nums[mid] < nums[mid +1]) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
};

const findPeak2 = (arr) => {
    let start = 0;
    let end = arr.length - 1;

    while (start < end) {
        const middle = Math.floor((start + end) / 2);

        if (arr[middle] < arr[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
    console.log({s: arr[start],  e: arr[end], start, end});
    
    return start;
}

console.log(findPeak2(arr4));