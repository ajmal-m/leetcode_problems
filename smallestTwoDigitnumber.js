/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */

/* 
Given two arrays of unique digits nums1 and nums2, return the smallest number that contains at least one digit from each array.

*/
var minNumber = function (nums1, nums2) {
    const both = [];
    for (let ele of nums1) {
        if (nums2.includes(ele)) {
            both.push(ele)
        }
    }
    if (both.length > 0) {
        return Math.min(...both)
    }
    const m1 = Math.min(...nums1);
    const m2 = Math.min(...nums2)
    if (m1 > m2) {
        return parseInt(m2.toString() + m1.toString())
    } else {
        return parseInt(m1.toString() + m2.toString())
    }
};