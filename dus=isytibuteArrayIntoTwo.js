/**
 * 
 * 
 * You need to distribute all the elements of nums between t
 * wo arrays arr1 and arr2 using n operations. In the first operation, append nums[1] to arr1
 * . In the second operation, append nums[2] to arr2. Afterwards, in the ith operation:


 * 
 */



/**
 * @param {number[]} nums
 * @return {number[]}
 */
var resultArray = function(nums) {
    let arr1 = [];
    let arr2 = [];
    if(nums.length <= 2){
        return nums;
    }

    arr1.push(nums[0]);
    arr2.push(nums[1]);


    for(let i=2; i< nums.length; i++){
        if(arr1[arr1.length-1] > arr2[arr2.length-1]){
            arr1.push(nums[i]);
        }else{
            arr2.push(nums[i]);
        }
    }

    return arr1.concat(arr2);
};