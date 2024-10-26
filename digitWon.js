/**
 * 
 * 
 * Alice and Bob are playing a game. In the game, 
 * Alice can choose either all single-digit numbers or 
 * all double-digit numbers from nums, and the rest of the
 *  numbers are given to Bob. Alice wins if the sum of her 
 * numbers is strictly greater than the sum of Bob's numbers.


 * 
 */



/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    let sumSingle = 0;
    let sumDoubleDigit = 0;
    for(let num of nums){
        if(num < 10 && num > 0){
            sumSingle += num;
        }

        if(num >= 10 && num < 100){
            sumDoubleDigit += num;
        }
    }

    if( sumSingle > sumDoubleDigit || sumDoubleDigit > sumSingle){
        return true
    }

    return false
};