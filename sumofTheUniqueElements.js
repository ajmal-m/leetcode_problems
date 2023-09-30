
/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let sum = 0;
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            hash[nums[i]] += 1
        } else {
            hash[nums[i]] = 1
        }
    }
    for (let key in hash) {
        if (hash[key] === 1) {
            sum += parseInt(key)
        }
    }
    return sum
};

/* 
You are given an integer array nums. The unique elements of an array are the elements that appear exactly once in the array.

Return the sum of all the unique elements of nums.
*/