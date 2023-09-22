
/* 
Given the array of integers nums, you will choose two different indices i and j of that array. Return the maximum value of (nums[i]-1)*(nums[j]-1).
*/
var maxProduct = function (nums) {
    let max = -Infinity;
    for (let i = 0; i < nums.length - 1; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            let p = ((nums[i] - 1) * (nums[j] - 1))
            if (p > max) {
                max = p
            }
        }
    }
    return max
};