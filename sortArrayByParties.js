/* 
Given an array of integers nums, half of the integers in nums are odd, and the other half are even.

Sort the array so that whenever nums[i] is odd, i is odd, and whenever nums[i] is even, i is even.

Return any answer array that satisfies this condition.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    let evenIndex = 0;
    let oddIndex = 1;
    let n = nums.length;
    while (evenIndex < n && oddIndex < n) {
        if (nums[evenIndex] % 2 === 0 && nums[oddIndex] % 2 === 1) {
            evenIndex += 2;
            oddIndex += 2;
            continue
        }
        if (nums[evenIndex] % 2 === 1 && nums[oddIndex] % 2 === 1) {
            oddIndex += 2;
            continue
        }
        if (nums[evenIndex] % 2 === 0 && nums[oddIndex] % 2 === 0) {
            evenIndex += 2;
            continue
        }
        if (nums[evenIndex] % 2 === 1 && nums[oddIndex] % 2 === 0) {
            const temp = nums[evenIndex];
            nums[evenIndex] = nums[oddIndex];
            nums[oddIndex] = temp;
            continue
        }
    }
    return nums
};