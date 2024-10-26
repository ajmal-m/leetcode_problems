/**
 * @param {string[]} words
 * @return {string[]}
 */

/**
 * 
 * @param {
 * ou are given a 0-indexed string array words, where words[i] consists of lowercase English letters.

In one operation, select any index i such that 0 < i < words.length and words[i - 1] and words[i] are anagrams, and delete words[i] from words. Keep performing this operation as long as you can select an index that satisfies the conditions.

Return words after performing all operations. It can be shown that selecting the indices for each operation in any arbitrary order will lead to the same result.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase using all the original letters exactly once. For example, "dacb" is an anagram of "abdc".

 

Example 1:

Input: words = ["abba","baba","bbaa","cd","cd"]
Output: ["abba","cd"]
Explanation:
One of the ways we can obtain the resultant array is by using the following operations:
- Since words[2] = "bbaa" and words[1] = "baba" are anag
 * 
 * } words 
 * @returns 
 */



/**
 * @param {string[]} words
 * @return {string[]}
 */
var removeAnagrams = function(words) {
    let isAnagram = (s1, s2) => {
        let h1 = {};
        let h2 = {};

        for(let letter of s1){
            if(h1[letter]){
                h1[letter] += 1;
            }else{
                h1[letter] = 1;
            }
        }

        for(let letter of s2){
            if(h2[letter]){
                h2[letter] += 1;
            }else{
                h2[letter] = 1;
            }
        }


        let isAnagram = true;

        for(let key in h1){
            if(h1[key] != h2[key]){
                isAnagram = false;
                break;
            }
        }

        for(let key in h2){
            if(h1[key] != h2[key]){
                isAnagram = false;
                break;
            }
        }

        return isAnagram;
    }

    if(words.length == 1){
        return words
    }

    let index = 1;
    for(let i=1; i< words.length; i++){
        if(isAnagram(words[i], words[i-1])){
            words.splice(i, 1);
            i=0;
        }
    }

    return words;
};