/**
 * Если искомого значения нету(да нету, потому что мне так хочется) - возвращаем индекс, где оно должно быть
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var searchInsert = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid;
  
    while (left <= right) {
      mid = Math.round((right - left) / 2 + left);    
      if (target === nums[mid]) {
        return mid;
      }
      else if (target < nums[mid]) {      
        right = mid - 1;
      } else {
        left = mid + 1;
      }
      
    }
  
    return nums[mid] >= target ? mid : mid + 1;
  };