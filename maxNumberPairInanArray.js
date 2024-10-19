/**
 * 
 * 
 * 
 * You are given a 0-indexed integer array nums. In one operation, you may do the following:

Choose two integers in nums that are equal.
Remove both integers from nums, forming a pair.
The operation is done on nums as many times as possible.

Return a 0-indexed integer array answer of size 2 where answer[0] is the number of pairs that are formed and answer[1] is the number of leftover integers in nums after doing the operation as many times as possible.


 * 
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberOfPairs = function(nums) {
    let hash = {};
    let numPair = 0;
    let resmin = 0;
    for(let i=0; i< nums.length; i++){
        if(hash[nums[i]]){
            hash[nums[i]] += 1;
        }else{
            hash[nums[i]] = 1;
        }
    }

    for(let key in hash){
        if(hash[key] >= 1){
            numPair += Math.floor(hash[key]/2);
            resmin += hash[key]%2;
        }
    }

    return [numPair, resmin]
};