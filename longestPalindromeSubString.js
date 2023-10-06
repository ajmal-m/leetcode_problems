/**
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    if (s.length < 2) {
        return s
    }
    let longest = "";
    for (let i = 0; i < s.length; i++) {
        let oddString = expand(s, i, i);
        let evenString = expand(s, i, i + 1);
        if (oddString.length > longest.length) {
            longest = oddString;
        }
        if (evenString.length > longest.length) {
            longest = evenString
        }
    }
    return longest

};

var expand = function (s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return s.slice(left + 1, right);
}

/* 
Given a string s, return the longest 
palindromic
 
substring
 in s.

 

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
*/