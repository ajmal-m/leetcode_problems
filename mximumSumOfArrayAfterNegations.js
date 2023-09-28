/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var largestSumAfterKNegations = function (nums, k) {
    nums.sort((a, b) => (a - b));
    for (let i = 0; i < nums.length && k > 0; i++) {
        if (nums[i] < 0) {
            nums[i] *= -1;
            k--;
        }
    }
    if (k % 2 === 1) {
        nums.sort((a, b) => (a - b));
        nums[0] *= -1;
    }
    let sum = 0;
    nums.forEach((item) => { sum += item })
    return sum
};

/* 
Given an integer array nums and an integer k, modify the array in the following way:

choose an index i and replace nums[i] with -nums[i].
You should apply this process exactly k times. You may choose the same index i multiple times.

Return the largest possible sum of the array after modifying it in this way.
*/