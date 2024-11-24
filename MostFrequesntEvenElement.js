/**
 * @param {number[]} nums
 * @return {number}
 */
var mostFrequentEven = function(nums) {
    let hash = {};
    for(let i=0; i< nums.length;i++){
        if( nums[i] % 2 == 0){
            if( hash[nums[i]] ){
                hash[nums[i]]++;
            }else{
                hash[nums[i]] = 1;
            }
        }
    }

    let maxFreq = 0;
    let valHash = [];
    for(let key in hash){
        if( hash[key] > maxFreq){
            valHash = [];
            maxFreq = hash[key];
            valHash.push(parseInt(key));
        }else if( hash[key] == maxFreq ){
            valHash.push(parseInt(key));
        }
    }


    valHash = valHash.sort((a,b) => (a-b));

    return valHash?.length ? valHash[0] : -1;
};




/**Given an integer array nums, return the most frequent even element.

If there is a tie, return the smallest one. If there is no such element, return -1. */