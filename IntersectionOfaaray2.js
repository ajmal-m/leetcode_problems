/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let hash = {};
    let res = [];

    for(let i=0; i< nums1.length;i++){
        if(hash[nums1[i]]){
            hash[nums1[i]]++;
        }else{
            hash[nums1[i]] = 1;
        }
    }

    for(let j=0; j< nums2.length;j++){
        if(hash[nums2[j]]){
            res.push(nums2[j]);
            hash[nums2[j]]--;
        }
    }

    return res;

    
};

/**
 * 
 * 
 * Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must appear as many 
 * times as it shows in both arrays and you may return the result in any order.
 * 
 */