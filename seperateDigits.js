/* 
Given an array of positive integers nums, return an array answer that consists of the digits of each integer in nums after separating them in the same order they appear in nums.
To separate the digits of an integer is to get all the digits it has in the same order.
For example, for the integer 10921, the separation of its digits is [1,0,9,2,1].
*/
var separateDigits = function (nums) {
    let stack = [];
    let res = [];
    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0) {
            let reminder = nums[i] % 10;
            stack.push(reminder)
            nums[i] = parseInt(nums[i] / 10)
        }
        stack.reverse();
        res = [...res, ...stack]
        stack = []
    }
    return res
};