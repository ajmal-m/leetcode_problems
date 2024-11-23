/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let left = 0;
    let right = 1;

    while(left < nums.length && right < nums.length){

        if(nums[left] !=0 && nums[right] !=0){
            left++;
            right++;
        }
        else if(nums[left] == 0 && nums[right] != 0){
            let temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
            left++;
            right++;
        }else if(nums[left] != 0){
            left++;
        }else if(nums[right] == 0){
            right++;
        }
    }

    return nums;
};