/**
 * @param {number[]} nums
 * @return {number}
 */
var arraySign = function (nums) {
    let product = 1;
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i]
    }
    return product > 0 ? 1 : product < 0 ? -1 : 0
};
/* 
There is a function signFunc(x) that returns:

1 if x is positive.
-1 if x is negative.
0 if x is equal to 0.
You are given an integer array nums. Let product be the product of all values in the array nums.

Return signFunc(product).

 
*/