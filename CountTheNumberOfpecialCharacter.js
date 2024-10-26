/**
 * 
 * 
 * You are given a string word. A letter is called special if it appears both in lowercase and uppercase in word.

Return the number of special letters in word.


 */


/**
 * @param {string} word
 * @return {number}
 */
var numberOfSpecialChars = function(word) {
    let hash = {};
    let res = 0;
    for(let i=0; i< word.length; i++){
        if(hash[word[i]]){
            if(hash[word[i]] == 1){
                res ++;
            }
            hash[word[i]] += 1;
        }else{
            if(word[i].toUpperCase() == word[i] && !hash[word[i].toLowerCase()]){
                hash[word[i].toLowerCase()] = 1;
            }else if(!hash[word[i].toUpperCase()] && word[i].toUpperCase() != word[i]){
                hash[word[i].toUpperCase()] = 1;
            }
        }
    }

    return res;
};