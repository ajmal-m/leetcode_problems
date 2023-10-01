/**
 * @param {string} s
 * @return {number}
 */
var countGoodSubstrings = function (s) {
    let count = 0;
    for (let i = 0; i < s.length - 2; i++) {
        let hash = {};
        let good = true
        for (let j = i; j < i + 3; j++) {
            if (s[j] in hash) {
                good = false;
                break
            } else {
                hash[s[j]] = true
            }
        }
        if (good) {
            count++
        }
    }
    return count
};
/* 
A string is good if there are no repeated characters.

Given a string s​​​​​, return the number of good substrings of length three in s​​​​​​.

Note that if there are multiple occurrences of the same substring, every occurrence should be counted.

A substring is a contiguous sequence of characters in a string.z
*/