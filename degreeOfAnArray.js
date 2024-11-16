/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let hashTable = {};
    let numDegree = arrayDegree(nums);
    let minLengh = Infinity;
    

    for(let i=nums.length; i > 0; i--){
        for(let j=0;j+i-1 < nums.length; j++ ){
            let arr = nums.slice(j, j+i);
            let degree = arrayDegree(arr);
            if(numDegree == degree){
                if(minLengh > arr.length){
                    minLengh = arr.length;
                }
            }
        }
    }

    return minLengh;
};


 const arrayDegree = function(arr){
    let hash = {};
    let maxFreq = 1;
    for(let i=0; i< arr.length; i++){
        if(hash[arr[i]]){
            hash[arr[i]] += 1;
            if( hash[arr[i]] > maxFreq){
                maxFreq = hash[arr[i]];
            }
        }else{
            hash[arr[i]] = 1;
        }
    }
    return maxFreq;
}



/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let hash = {};
    let maxFreq =1;
    let maxKey = [];

    for(let i=0; i< nums.length; i++){
        if(hash[nums[i]]){
            hash[nums[i]] += 1;
            if(maxFreq < hash[nums[i]]){
                maxFreq = hash[nums[i]];
            }
        }else{
            hash[nums[i]] = 1;
        }
    }

   

    for(let key in hash){
        if(hash[key] == maxFreq ){
            maxKey.push(parseInt(key));
        }
    }


    let minLength = Infinity;

    for(let key of maxKey){
        let arrLen = [];
        for(let i=0; i< nums.length; i++){
            if(nums[i] == key){
                if(arrLen.length == 0){
                    arrLen.push(i);
                }else{
                    arrLen[1] = i;
                }
            }
        }
        let length =  arrLen[1] - arrLen[0]  +1;
        if(minLength > length){
            minLength = length;
        }
    }

    return minLength == Infinity ? 1 : minLength;

};