var sortedSquares = function (nums) {
    const result = new Array(nums.length);
    let left = 0;
    let right = nums.length - 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        if (Math.abs(nums[right]) < Math.abs(nums[left])) {
            result[i] = nums[left] ** 2
            left++;
        } else {
            result[i] = nums[right] ** 2;
            right--;
        }
    }
    return result
};
/*  
Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.
*/