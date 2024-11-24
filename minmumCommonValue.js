/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let pointer1 = 0;
    let pointer2 = 0;

    while( pointer1 < nums1.length && pointer2 < nums2.length ){
        if( nums1[pointer1] < nums2[pointer2]){
            pointer1++;
        }else if( nums1[pointer1] > nums2[pointer2]){
            pointer2++;
        }else{
            return nums1[pointer1];
        }
    }

    return -1;
};

/**Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer. */