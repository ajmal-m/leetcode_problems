// Given a circular integer array nums (i.e., the next element of nums[nums.length - 1] is nums[0]), return the next greater number for every element in nums.

// The next greater number of a number x is the first greater number to its traversing-order next in the array, which means you could search circularly to find its next greater number. If it doesn't exist, return -1 for this number.




/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    let res = new Array(nums.length).fill(-1);
    let stack = [];
    let l = nums.length;

    for(let i=0; i< nums.length*2; i++){
        while(stack.length && nums[i % l] > nums[stack[stack.length-1]]){
            let index = stack.pop();
            res[index] = nums[i % l]
        }

        stack.push(i% l);
    }


    return res;
};