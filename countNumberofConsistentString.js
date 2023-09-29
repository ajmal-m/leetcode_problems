/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function (allowed, words) {
    const hash = {};
    let count = 0;
    for (let i = 0; i < allowed.length; i++) {
        hash[allowed[i]] = true
    }
    for (let i = 0; i < words.length; i++) {
        let status = true;
        for (let j = 0; j < words[i].length; j++) {
            if (!(words[i][j] in hash)) {
                status = false;
                break
            }
        }
        if (status) {
            count++
        }
    }
    return count
};

/* 
You are given a string allowed consisting of distinct characters and an array of strings words. A string is consistent if all characters in the string appear in the string allowed.

Return the number of consistent strings in the array words.
*/