/**
 * 
Code


Testcase
Testcase
Test Result
Note
Note
2451. Odd String Difference
Solved
Easy
Topics
Companies
Hint
You are given an array of equal-length strings words. Assume that the length of each string is n.

Each string words[i] can be converted into a difference integer array difference[i] of length n - 1 where difference[i][j] = words[i][j+1] - words[i][j] where 0 <= j <= n - 2. Note that the difference between two letters is the difference between their positions in the alphabet i.e. the position of 'a' is 0, 'b' is 1, and 'z' is 25.

For example, for the string "acb", the difference integer array is [2 - 0, 1 - 2] = [2, -1].
All the strings in words have the same difference integer array, except one. You should find that string.

Return the string in words that has different difference integer array.
 * 
 */

/**
 * @param {string[]} words
 * @return {string}
 */
var oddString = function(words) {
    let hash = {};
    for(let i=0; i< words.length; i++){
        let arr = [];
        for(let j=1; j< words[i].length; j++){
            let val = (words[i][j].charCodeAt(0))-(words[i][j-1].charCodeAt(0));
            arr.push(val)
        }
        let key = arr.join("+");
        if(hash[key]){
            hash[key].push(words[i])
        }else{
            hash[key] = [ words[i]]
        }
    }

    for(let key in hash){
        if(hash[key].length ==1){
            return hash[key][0]
        }
    }

    return ''
};