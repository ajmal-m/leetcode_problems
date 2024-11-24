/**
 * @param {number[][]} nums
 * @return {number[]}
 */
var intersection = function(nums) {
    let compareHash = {};
    for(let i=0; i< nums.length; i++){
        let hash = {};
        for(let j=0; j< nums[i].length; j++){
            if(!compareHash[nums[i][j]]){
                compareHash[nums[i][j]] = true;
            }else{
                hash[nums[i][j]] = true;
            }
        }
        if(i > 0){
            compareHash = {...hash};
        }
    }

    let res = [];

    for(let key in compareHash){
        res.push(parseInt(key));
    }

    return res;
};


/**
 * 
 * Given a 2D integer array nums where nums[i] is a non-empty 
 * array of distinct positive integers, return the list of integers
 *  that are present in each array of nums sorted in ascending order.
 * 
 */