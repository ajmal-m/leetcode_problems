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
    let hash = {
        'A': true, 'B': true, 'C': true,
        'D': true, "E": true, 'F': true, 'G': true, 'H': true, 'I': true,
        'J': true, 'K': true, 'L': true, 'M': true, 'N': true, 'O': true,
        'P': true, 'Q': true, 'R': true, 'S': true, 'T': true, 'U': true,
        'V': true, 'W': true, 'X': true, 'Y': true, 'Z': true
    }
    let allCapital = true;
    let allSmallLetter = true;
    let firstCapital = true
    for (let i = 0; i < word.length; i++) {
        if ((word[i] in hash && i === 0)) {
            firstCapital = true
        } else if (word[i] in hash) {
            firstCapital = false;
            allSmallLetter = false
        } else {
            allCapital = false
        }
    }

    return allCapital || allSmallLetter || firstCapital
};