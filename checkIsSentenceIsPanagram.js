/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function (sentence) {
    let arr = new Array(26).fill(false);
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i] >= 'a' && sentence[i] <= 'z') {
            let index = sentence[i].charCodeAt(0) - 'a'.charCodeAt(0);
            arr[index] = true
        }
    }
    for (let item of arr) {
        if (!item) {
            return false
        }
    }
    return true
};

/*
A pangram is a sentence where every letter of the English alphabet appears at least once.

Given a string sentence containing only lowercase English letters, return true if sentence is a pangram, or false otherwise.
*/