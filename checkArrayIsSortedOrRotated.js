/**
 * @param {number[]} nums
 * @return {boolean}
 */
var check = function (nums) {
    let start = 0;
    let sortNums = [...nums].sort((a, b) => (a - b))
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > nums[i + 1]) {
            start = i + 1;
            break
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (nums[(i + start) % nums.length] !== sortNums[i]) {
            return false
        }
    }
    return true
};
/* 
Given an array nums, return true if the array was originally sorted in non-decreasing order, then rotated some number of positions (including zero). Otherwise, return false.

There may be duplicates in the original array.

Note: An array A rotated by x positions results in an array B of the same length such that A[i] == B[(i+x) % A.length], where % is the modulo operation.
*/