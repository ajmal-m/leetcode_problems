/**
 * @param {number[]} nums
 * @return {number[]}
 */

/*  
Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]…nums[i]).

Return the running sum of nums. */
var runningSum = function (nums) {
    const n = nums.length
    const res = new Array(n).fill(0);
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        res[i] = sum
    }
    return res
};



var runningSum = function (nums) {
    let sum = 0
    let n = nums.length
    for (let i = 0; i < n; i++) {
        sum += nums[i];
        nums[i] = sum
    }
    return nums
};


var runningSum = function (nums) {
    let sum = 0
    let n = nums.length
    for (let i = 1; i < n; i++) {
        nums[i] += nums[i - 1]
    }
    return nums
};