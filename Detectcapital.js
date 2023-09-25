/*
We define the usage of capitals in a word to be right when one of the following cases holds:

All letters in this word are capitals, like "USA".
All letters in this word are not capitals, like "leetcode".
Only the first letter in this word is capital, like "Google".
Given a string word, return true if the usage of capitals in it is right.
*/

/**
 * @param {string} word
 * @return {boolean}
 */

var detectCapitalUse = function (word) {
    let uppercaseCount = 0;
    for (let letter of word) {
        if (letter === letter.toUpperCase()) {
            uppercaseCount++
        }
    }
    if (uppercaseCount === 0 || uppercaseCount === word.length || (uppercaseCount === 1 && word[0] === word[0].toUpperCase())) {
        return true
    } else {
        return false
    }
};