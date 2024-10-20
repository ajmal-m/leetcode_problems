/**
 * 
 * 
 * Given a 0-indexed integer array nums, determine whether there exist two subarrays of length 2 with equal sum. Note that the two subarrays must begin at different indices.

Return true if these subarrays exist, and false otherwise.

A subarray is a contiguous non-empty sequence of elements within an array.
 * 
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var findSubarrays = function(nums) {
    let hash = {};

    for(let i=0; i< nums.length; i++){
        let sum = nums[i]+ nums[i+1];
        if(hash[sum]){
            return true;
        }else{
            hash[sum] = true;
        }
    }

    return false
};