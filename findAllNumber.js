/**
 * @param {number[]} nums
 * @return {number[]}
 */
/*
Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.
*/
var findDisappearedNumbers = function (nums) {
    let hash = {}
    let res = []
    for (let i = 0; i < nums.length; i++) {
        if (!(nums[i] in hash)) {
            hash[nums[i]] = true
        }
    }
    for (let i = 1; i <= nums.length; i++) {
        if (!(i in hash)) {
            res.push(i)
        }
    }
    return res
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var f = function (nums) {
    let res = [];

    for (let i = 0; i < nums.length; i++) {
        const index = Math.abs(nums[i]) - 1;
        if (nums[index] > 0) {
            nums[index] = -nums[index];
        }
        console.log(nums)
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }

    return res;
};


console.log(f([2, 3, 1, 4, 4]))