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
      mid = Math.round((left + right) / 2);    
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

  console.log(searchInsert([1,2,3,4,5,6], 1));