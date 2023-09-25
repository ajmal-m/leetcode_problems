/* 
Given a binary array nums, return the maximum number of consecutive 1's in the array.
*/

var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let stack = [];
    for (let item of nums) {
        if (item === 1) {
            stack.push(1);
            if (stack.length > max) {
                max = stack.length
            }
        } else {
            stack = []
        }
    }
    return max
};