/** Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present 
in at least two out of the three arrays. You may return the values in any order.
Input: nums1 = [1,1,3,2], nums2 = [2,3], nums3 = [3]
Output: [3,2]
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    // Another solution
    nums1 = [...new Set(nums1)];
    nums2 = [...new Set(nums2)];
    nums3 = [...new Set(nums3)];
    let hash = {};

    for(let i=0; i< nums1.length; i++){
        if(hash[nums1[i]]){
            hash[nums1[i]] += 1;
        }else{
            hash[nums1[i]] = 1;
        }
    }

    for(let i=0; i< nums2.length; i++){
        if(hash[nums2[i]]){
            hash[nums2[i]] += 1;
        }else{
            hash[nums2[i]] = 1;
        }
    }

    for(let i=0; i< nums3.length; i++){
        if(hash[nums3[i]]){
            hash[nums3[i]] += 1;
        }else{
            hash[nums3[i]] = 1;
        }
    }

    let res = [];

    for(let key in hash){
        if(hash[key] >=2){
            res.push(parseInt(key));
        }
    }


    return [ ...new Set(res)]
};