var findLengthOfLCIS = function (nums) {
    let max = 0;
    let n = nums.length;
    let l = 0;
    let r = 0;
    while (n > r) {
        if (nums[r] > nums[r - 1]) {
            if ((r - l + 1) > max) {
                max = r - l + 1
            }
            r++;
        } else {
            l = r;
            r = r + 1
        }
    }
    return max || 1
};

/*  
Given an unsorted array of integers nums, return the length of the longest continuous increasing subsequence (i.e. subarray). The subsequence must be strictly increasing.

A continuous increasing subsequence is defined by two indices l and r (l < r) such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each l <= i < r, nums[i] < nums[i + 1].
*/