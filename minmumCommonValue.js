/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var getCommon = function(nums1, nums2) {
    let hash = {};
    let common = [];

    for(let num of nums1){
        if(hash[num]){
            hash[num]++;
        }else{
            hash[num] = 1;
        }
    }

    for(let num of nums2){
        if(hash[num]){
            common.push(num);
        }
    }

    common = common.sort((a,b) => (a-b));
    return common?.length ? common[0] : -1;
};


/**Given two integer arrays nums1 and nums2, sorted in non-decreasing order, return the minimum integer common to both arrays. If there is no common integer amongst nums1 and nums2, return -1.

Note that an integer is said to be common to nums1 and nums2 if both arrays have at least one occurrence of that integer. */