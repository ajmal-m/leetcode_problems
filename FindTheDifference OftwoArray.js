/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let res = [[], []];
    for(let i=0; i< nums1.length; i++){
        let present = false;
        for(let j=0; j< nums2.length;j++){
            if(nums2[j] == nums1[i]){
                present = true;
                break
            }
        }

        if(!present){
            res[0].push(nums1[i]);
        }
    }


    for(let i=0; i< nums2.length; i++){
        let present = false;
        for(let j=0; j< nums1.length;j++){
            if(nums1[j] == nums2[i]){
                present = true;
                break
            }
        }

        if(!present){
            res[1].push(nums2[i]);
        }
    }

    return [ [...new Set(res[0])], [ ...new Set(res[1])]]
};


//MATHOD@



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    nums1 = [ ...new Set(nums1)];
    nums2 = [ ...new Set(nums2)];
    let common = nums1.filter((item) => (nums2.includes(item)) );
    let res = [ nums1.filter((item) => (!common.includes(item))), nums2.filter((item) => (!common.includes(item))) ]

    return res

};