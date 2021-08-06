const arr1 = [1,2,2,1];
const arr2 = [2,2];
// [2,2]

const arr3 = [4,9,5];
const arr4 = [9,4,9,8,4];
// [4,9] || [9,4]

// use hash map
// O(n+m)
const intersect = (nums1, nums2) => {
    const result = [];

    let map = nums1.reduce((acc, i) => {
        acc[i] = acc[i] ? acc[i] + 1 : 1;
        return acc;
    }, {});

    
    for (let j = 0; j < nums2.length; j++) {        
        if (nums2[j] in map && map[nums2[j]] !== 0) {
            result.push(nums2[j]);
            map[nums2[j]] -= 1;
        }
    }

    return result;
}

console.log(intersect(arr1, arr2));
console.log(intersect(arr3, arr4));