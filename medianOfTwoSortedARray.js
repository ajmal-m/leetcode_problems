/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/*
Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.

The overall run time complexity should be O(log (m+n)).
*/
var findMedianSortedArrays = function (nums1, nums2) {
    let i = 0;
    let j = 0;
    let result = [];
    while (i < nums1.length && j < nums2.length) {
        if (nums1[i] > nums2[j]) {
            result.push(nums2[j]);
            j++
        } else {
            result.push(nums1[i])
            i++
        }
    }
    while (i < nums1.length) {
        result.push(nums1[i]);
        i++;
    }
    while (j < nums2.length) {
        result.push(nums2[j])
        j++
    }
    let n = result.length;
    if (n % 2 === 1) {
        return result[((n + 1) / 2) - 1]
    } else {
        let avg = (result[(n / 2) - 1] + result[(n / 2)]) / 2
        return avg
    }
};