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



/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function(nums) {
    let degree = 0;
    let freq = {};
    let firstIndex = {};
    let lastIndex = {};

    for(let i=0; i< nums.length; i++){
        let num = nums[i];
        if(! freq[num]){
            freq[num] = 1;
            firstIndex[num] = i;
            lastIndex[num] = i;
        }else{
            freq[num]++;
            lastIndex[num] = i;
        }
        degree = Math.max(degree, freq[num]);
    }

    let minLen = nums.length;

    for(let num in freq){
        if(freq[num] === degree){
            let length = lastIndex[num] - firstIndex[num] + 1;
            minLen = Math.min(minLen, length);
        }
    }

    return minLen
};