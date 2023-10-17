/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
    const hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            if (Math.abs(hash[nums[i]] - i) <= k) {
                return true
            } else {
                hash[nums[i]] = i
            }
        } else {
            hash[nums[i]] = i;
        }
    }
    return false
};

/*
Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= kz
*/