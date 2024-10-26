/**
 * 
 * 
 * 
Code
Testcase
Testcase
Test Result
Note
Note
3131. Find the Integer Added to Array I
Solved
Easy
Topics
Companies
Hint
You are given two arrays of equal length, nums1 and nums2.

Each element in nums1 has been increased (or decreased in the case of negative) by an integer, represented by the variable x.

As a result, nums1 becomes equal to nums2. Two arrays are considered equal when they contain the same integers with the same frequencies.

Return the integer x.
 * 
 */



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var addedInteger = function(nums1, nums2) {
    let sum1 = nums1.reduce((item, accum) => (item+accum), 0);
    let sum2 = nums2.reduce((item, accum) => (item+accum), 0);
    let x = (sum2-sum1)/(nums1.length);
    return x
};