// You are given an array nums consisting of positive integers.

// Return the total frequencies of elements in nums such that those elements all have the maximum frequency.

// The frequency of an element is the number of occurrences of that element in the array.



/**
 * @param {number[]} nums
 * @return {number}
 */
var maxFrequencyElements = function (nums) {
    let hash = {};
    let maxFreq = 0;
    let totalFreq = 0;

    for (let index = 0; index < nums.length; index++) {
        if (nums[index] in hash) {
            hash[nums[index]] += 1
        } else {
            hash[nums[index]] = 1;
        }
    }

    for (let key in hash) {
        if (hash[key] > maxFreq) {
            maxFreq = hash[key];
        }
    }


    for (let key in hash) {
        if (hash[key] == maxFreq) {
            totalFreq += hash[key];
        }
    }

    return totalFreq

};