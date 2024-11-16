/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var resultsArray = function(nums, k) {

    let result = [];
    let index = 0;

    // Power condition
    const conditionPower = function(arr){
        for(let i=0; i< arr.length-1; i++){
            if(arr[i] + 1 != arr[i+1]){
                return false;
            }

            if(arr[i+1] <= arr[i]){
                return false;
            }
        }

        return true;
    }


    // find maximum
    const maxElem = function(arr){
        let ele = arr[0];
        for(let i=1;i< arr.length;i++){
            if(arr[i] > ele){
                ele = arr[i];
            }
        }

        return ele;
    }

    while( (index+k-1) < nums.length ){
        let subArray = nums.slice(index, index+k);
        let isPowerExist =  conditionPower(subArray);
        if(!isPowerExist){
            result.push(-1);
        }else{
            result.push(maxElem(subArray));
        }
        index++;
    }


    return result;


};