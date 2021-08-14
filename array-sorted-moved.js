let nums1 = [4,5,6,7,0,1,2];
let nums2 = [1,2,3,4,5,6];

// O(log n)
const search = (nums, target) => {
    let left  = 0;
    let right = nums.length - 1;
    let mid;

    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (target === nums[mid]) {
            return mid;
        }

        // Проверяем, какая часть отсортированная, левая или правая
        if (nums[left] <= nums[mid]) {
            if (nums[left] <= target && target <= nums[mid]) {
                right = mid - 1;
            } 
            else {
                left = mid + 1;
            }
        } else {
            if (nums[mid] <= target && target <= nums[right]) {
                left = mid + 1;
            }
            else {
                right = mid - 1;
            }
        }
    }

    return -1;
}

console.log(search(nums1, 4));