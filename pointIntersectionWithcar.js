/**
 * 
 * 
 * 
 * You are given a 0-indexed 2D integer array nums representing the coordinates of the cars parking on a number line. For any index i, nums[i] = [starti, endi] where starti is the starting point of the ith car and endi is the ending point of the ith car.

Return the number of integer points on the line that are covered with any part of a car
 * 
 */



/**
 * @param {number[][]} nums
 * @return {number}
 */
var numberOfPoints = function(nums) {
    let arr = [];
    for(let i=0; i< nums.length; i++){
        let [start, end] = nums[i];
        for(let j= start; j<= end; j++){
            arr.push(j);
        }
    }

    return [ ...new Set(arr)].length;
};