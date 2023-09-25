

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */

/* 
The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.

You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.

For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.

Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
*/
var nextGreaterElement = function (nums1, nums2) {
    let res = []
    for (let i = 0; i < nums1.length; i++) {
        for (j = 0; j < nums2.length; j++) {
            if (nums1[i] === nums2[j]) {
                let exist = false
                for (let k = j + 1; k < nums2.length; k++) {
                    if (nums2[k] > nums2[j]) {
                        res.push(nums2[k]);
                        exist = true
                        break
                    }
                }
                if (!exist) {
                    res.push(-1)
                }
            }
        }
    }
    return res
};