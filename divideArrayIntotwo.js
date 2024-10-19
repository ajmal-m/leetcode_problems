/**
 * 
 * 
 *
 * You are given an integer array nums consisting of 2 * n integers.

You need to divide nums into n pairs such that:

Each element belongs to exactly one pair.
The elements present in a pair are equal.
Return true if nums can be divided into n pairs, otherwise return false.
 * 
 */


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var divideArray = function(nums) {
    let hash = {};
    for(let i=0; i< nums.length;i++){
        if(hash[nums[i]]){
            hash[nums[i]] += 1;
        }else{
            hash[nums[i]] = 1;
        }
    }

    for(let key in hash){
        if( hash[key] % 2 != 0){
            return false;
        }
    }

    return true
};