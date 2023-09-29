/*  
Given an array of integers nums, sort the array in increasing order based on the frequency of the values. If multiple values have the same frequency, sort them in decreasing order.

Return the sorted array.
Example 1:

Input: nums = [1,1,2,2,2,3]
Output: [3,1,1,2,2,2]
Explanation: '3' has a frequency of 1, '1' has a frequency of 2, and '2' has a frequency of 3.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] in hash) {
            hash[nums[i]] += 1;
        } else {
            hash[nums[i]] = 1;
        }
    }
    nums.sort((a, b) => (hash[a] - hash[b] || (b - a)))
    return nums
};