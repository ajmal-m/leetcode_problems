/**
 * 
 * 
 * An array is monotonic if it is either monotone increasing or monotone decreasing.

An array nums is monotone increasing if for all i <= j, nums[i] <= nums[j]. An array nums is monotone decreasing if for all i <= j, nums[i] >= nums[j].

Given an integer array nums, return true if the given array is monotonic, or false otherwise.


 * 
 */



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function(nums) {
    let monoIncrease = true;
    let monoDecrease = true;
    for(let i=0; i< nums.length-1; i++){
        if( nums[i+1] > nums[i]){
            // Increase
            if(monoDecrease){
                monoDecrease = false;
            }
        }else if(nums[i+1] < nums[i]){
            // Decrease
            if(monoIncrease){
                monoIncrease = false;
            }
        }
    }

    return monoIncrease || monoDecrease;

};