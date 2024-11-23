/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    nums = nums.sort((a,b) => (b-a));
    nums = [...new Set([...nums])];
    return nums.length < 3  ? nums[0] : nums[2] ;
};


/**
 * 
 * 
 * Given an integer array nums, return the third distinct maximum
 *  number in this array. If the third maximum does not exist, return the maximum number.
 * 
 */