/**
 * 
 * 
 * You are given a 0-indexed array of strings words and a character x.

Return an array of indices representing the words that contain the character x.

Note that the returned array may be in any order.
 * 
 */


/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    return words.reduce(( acc, item, i) => {
        if(item.split("").includes(x)){
            acc.push(i)
        }
        return acc;
    }, [])
};