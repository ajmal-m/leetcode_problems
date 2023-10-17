/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {

    let n = nums.length
    let res = [];
    let hash = {}
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            hash[nums[i]] += 1
        } else {
            hash[nums[i]] = 1
        }
    }
    for (let key in hash) {
        if (hash[key] > Math.floor(n / 3)) {
            res.push(key)
        }
    }
    return res
};

/*
Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.z
*/