/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let newNum = [...nums]
    newNum.sort((a, b) => (b - a));
    let remain = nums.length - 1;
    let hash = {};
    for (let i = 0; i < nums.length; i++) {
        hash[newNum[i]] = remain;
        remain--;
    }
    for (let i = 0; i < nums.length; i++) {
        nums[i] = hash[nums[i]]
    }
    return nums
};
/* Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

Return the answer in an array.

  */