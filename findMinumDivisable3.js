/**
 * 
 * 
 * You are given an integer array nums. In one operation, you can add or subtract 1 from any element of nums.

Return the minimum number of operations to make all elements of nums divisible by 3.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function(nums) {
    let res = 0;
    for(let num of nums){
        if(num % 3 != 0){
            res ++;
        }
    }

    return res
};