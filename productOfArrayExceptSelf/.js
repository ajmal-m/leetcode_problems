/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let leftProduct = 1;
    let rightProduct = 1;
    let n = nums.length;
    let leftPrefix = new Array(n).fill(1);
    let rightPrefix = new Array(n).fill(1);
    for (let i = 0; i < n; i++) {
        leftPrefix[i] = leftProduct
        leftProduct *= nums[i]
    }
    for (let i = n - 1; i >= 0; i--) {
        rightPrefix[i] = rightProduct
        rightProduct *= nums[i]
    }
    let res = new Array(n).fill(0);
    for (let i = 0; i < n; i++) {
        res[i] = rightPrefix[i] * leftPrefix[i]
    }
    return res
};
/*
Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

You must write an algorithm that runs in O(n) time and without using the division operation.z
*/