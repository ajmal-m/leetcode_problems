/*  
Given a string s, return the length of the longest substring between two equal characters, excluding the two characters. If there is no such substring return -1.

A substring is a contiguous sequence of characters within a string.

*/

/**
 * @param {string} 
 * @return {number}
 */
var maxLengthBetweenEqualCharacters = function (s) {
    let max = -1;
    let hash = {};
    for (let i = 0; i < s.length; i++) {
        if (s[i] in hash) {
            max = Math.max(i - hash[s[i]] - 1, max)
        } else {
            hash[s[i]] = i;
        }
    }
    return max
};