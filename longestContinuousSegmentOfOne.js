/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function(s) {
    let longestZero = 0;
    let longestOne = 0;
    let maxZero = 0;
    let maxOne = 0;
    for(let i=0; i< s.length; i++){
        if(s[i] === '1'){
            longestOne++;
            longestZero = 0;
        }else{
            longestZero++;
            longestOne = 0;
        }
        maxZero = Math.max(maxZero, longestZero);
        maxOne = Math.max(maxOne, longestOne);
    }
    return maxOne > maxZero
};

/* 
Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

 
*/