/**
 * @param {string} s
 * @return {string}
 */
var sortSentence = function(s) {
    let arr = s.split(" ");
    arr.sort((a,b) => {
        let A = a[a.length-1];
        let B = b[b.length-1];
        return parseInt(A)-parseInt(B)
    })
    for(let i=0; i< arr.length; i++){
        arr[i] = arr[i].slice(0, arr[i].length-1);
    }
    return arr.join(" ")
};

/* 
A sentence is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be shuffled by appending the 1-indexed word position to each word then rearranging the words in the sentence.

For example, the sentence "This is a sentence" can be shuffled as "sentence4 a3 is2 This1" or "is2 sentence4 This1 a3".
Given a shuffled sentence s containing no more than 9 words, reconstruct and return the original sentence.
*/