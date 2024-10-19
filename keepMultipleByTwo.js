/**
 * 
 * 
 * Input: nums = [5,3,6,1,12], original = 3
Output: 24
Explanation: 
- 3 is found in nums. 3 is multiplied by 2 to obtain 6.
- 6 is found in nums. 6 is multiplied by 2 to obtain 12.
- 12 is found in nums. 12 is multiplied by 2 to obtain 24.
- 24 is not found in nums. Thus, 24 is returned.
 * 
 * 
 */



/**
 * @param {number[]} nums
 * @param {number} original
 * @return {number}
 */
var findFinalValue = function(nums, original) {
    let hash = {};
    for(let i=0; i< nums.length;i++){
      if(hash[nums[i]]){
          hash[nums[i]] += 1;
      }else{
          hash[nums[i]] += {};
      }
    }
  
    let start = true;
    while(start){
      if(hash[original]){
          original *= 2;
      }else{
          start = false;
      }
    }  
  
    return original
  };