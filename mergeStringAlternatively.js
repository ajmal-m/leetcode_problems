/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let res = "";
    let i=0;
    let j=0;
    while(i < word1.length || j < word2.length){
        let text1 = i < word1.length ? word1[i] : "";
        let text2 = j < word2.length ? word2[j] : "";
        res += text1 + text2
        i++;
        j++;
    }
    return res
};

/* 
You are given two strings word1 and word2. Merge the strings by adding letters in alternating order, starting with word1. If a string is longer than the other, append the additional letters onto the end of the merged string.

Return the merged string.
*/