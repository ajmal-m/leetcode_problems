/*
Given an array of integers nums, you start with an initial positive value startValue.

 In each iteration, you calculate the step by step sum of startValue plus elements in nums 
 (from left to right).

Return the minimum positive value of startValue such that the step by step sum is never less than 1.
*/

var minStartValue = function (nums) {
    let startValue = 1;
    let state = true
    while (state) {
        let sum = startValue;
        let allPositive = true
        for (let i = 0; i < nums.length; i++) {
            sum += nums[i]
            if (sum < 1) {
                allPositive = false
                break
            }
        }
        if (allPositive) {
            state = false
        } else {
            startValue += 1;
        }
    }
    return startValue
};