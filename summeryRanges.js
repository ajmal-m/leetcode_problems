/**
 * @param {number[]} nums
 * @return {string[]}
 */


/**
 * 
 * @param {
 * 
 * You are given a sorted unique integer array nums.

A range [a,b] is the set of all integers from a to b (inclusive).

Return the smallest sorted list of ranges that cover all the numbers in the array exactly. That is, each element of nums is covered by exactly one of the ranges, and there is no integer x such that x is in one of the ranges but not in nums.

Each range [a,b] in the list should be output as:

"a->b" if a != b
"a" if a == b
 * } nums 
 * @returns 
 */
var summaryRanges = function(nums) {
    let left = 0;
    let right = 0;

    let res = [];

    while( left < nums.length && right < nums.length){
        if( nums[right+1] == 1+nums[right]){
            right++;
        }else{
            let string;
            if(left == right){
                string = nums[left].toString();
            }else{
                string = nums[left] + "->"+nums[right];
            }
            res.push(string);

            left = right+1;
            right= right+1;
        }
    }

    return res;
};