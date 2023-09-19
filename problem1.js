/*
Given a sentence that consists of some words separated by a single space, and a searchWord, check if searchWord is a prefix of any word in sentence.

Return the index of the word in sentence (1-indexed) where searchWord is a prefix of this word. If searchWord is a prefix of more than one word, return the index of the first word (minimum index). If there is no such word return -1.

A prefix of a string s is any leading contiguous substring of s.
 */
var isPrefixOfWord = function (sentence, searchWord) {
    const arr = sentence.split(" ");
    let index = 0;
    let finalExist = false
    for (let item of arr) {
        let j = 0
        let exist = false
        for (let element of item) {
            if (j === searchWord.length - 1 && element === searchWord[j]) {
                exist = true
                break
            } else if (element !== searchWord[j]) {
                exist = false
                break
            }
            j++
        }
        if (exist) {
            finalExist = true
            break
        }
        index += 1
    }
    return finalExist ? index + 1 : -1
};