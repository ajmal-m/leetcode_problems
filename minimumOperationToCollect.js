/**
 * 
 * 
 * You are given an array nums of positive integers and an integer k.

In one operation, you can remove the last element of the array and add it to your collection.

Return the minimum number of operations needed to collect elements 1, 2, ..., k.
 * 
 */


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    let operations = 0;
    let numCount = 0;
    let hash = {};
    for(let i=nums.length-1; i>=0; i--){
        if(nums[i] <= k && !hash[nums[i]]){
            hash[nums[i]] = 1;
            numCount++;
        }
        operations++;

        if(numCount == k){
            break;
        }

    }
    return operations;
};