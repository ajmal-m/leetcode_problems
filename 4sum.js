/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    let n = nums.length;
    let a, b, c, d;
    let res = [];
    nums = nums.sort((a,b) => (a-b));
    let hash ={};
    for(let i=0; i< n-3; i++){
        for(let j=i+1; j< n-2; j++){
            a = nums[i];
            b = nums[j];
            l = j+1;
            r = n-1;
            while(l < r){
                if( (a + b + nums[l] + nums[r]) > target ){
                    r--;
                }else if( (a + b + nums[l] + nums[r]) < target){
                    l++;
                }else{
                    let key = a + "*" + b + '*' + nums[r] + "*" + nums[l];
                    if(! hash[key]){
                        res.push([a, b, nums[l], nums[r]]);
                        hash[key] = true;
                    }
                    l++;
                    r--;
                }
            }
        }
    }

    return res;
};