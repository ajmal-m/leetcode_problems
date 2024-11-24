/**
 * @param {number[]} nums
 * @return {number}
 */
var countHillValley = function(nums) {
    let totalHillVally = 0;
    for(let i=1; i< nums.length-1; i++){
        let currentVal = nums[i];
        let leftNeighbour = nums[i-1];
        let rightNeighbour = nums[i+1];

        // find  left neighbour
        if( leftNeighbour == currentVal){
            let left = i-1;
            while( left >= 0){
                if( currentVal != nums[left] ){
                    leftNeighbour = nums[left];
                    break;
                }else{
                    left--;
                }
            }
        }

        // find the right neigbour
        if( rightNeighbour == currentVal){
            let right = i+1;
            while( right > nums.length){
                if( currentVal != nums[right]){
                    rightNeighbour = nums[right];
                    break;
                }else{
                    right++;
                }
            }
        }


        // Find the total Hill vally
        if( currentVal > leftNeighbour && currentVal > rightNeighbour){
            totalHillVally++;
        }

        // Find the total Hill and vally
        if(currentVal < leftNeighbour && currentVal < rightNeighbour){
            totalHillVally++;
        }
    }

    return totalHillVally;
};


/**
 * 
 * You are given a 0-indexed integer array nums. An index i is part of a hill in nums if the closest non-equal neighbors of i are smaller than nums[i]. Similarly, an index i is part of a valley in nums if the closest non-equal neighbors of i are larger than nums[i]. Adjacent indices i and j are part of the same hill or valley if nums[i] == nums[j].

Note that for an index to be part of a hill or valley, it must have a non-equal neighbor on both the left and right of the index.

Return the number of hills and valleys in numswdq
 * 
 */