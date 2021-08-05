const arr1 = [1,2,2,1];
const arr2 = [2,2];
// [2,2]

const arr3 = [4,9,5];
const arr4 = [9,4,9,8,4];
// [4,9] || [9,4]

// use hash map
const intersect = (nums1, nums2) => {
    const result = [];

    let map = nums1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc;
    }, {});

    // todo 

    return result;
}

console.log(intersect(arr1, arr2));
console.log(intersect(arr3, arr4));