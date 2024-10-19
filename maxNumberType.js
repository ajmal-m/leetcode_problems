/**
 * 
 * 
 * Input: text = "hello world", brokenLetters = "ad"
Output: 1
Explanation: We cannot type "world" because the 'd' key is broken.
 * 
 * 
 */


/**
 * @param {string} text
 * @param {string} brokenLetters
 * @return {number}
 */
var canBeTypedWords = function(text, brokenLetters) {
    let typedWords = text.split(" ");
    let brokenHash = {};
    let res = 0;
    for(let i=0; i< brokenLetters.length; i++){
        brokenHash[brokenLetters[i]] = true;
    }

    for(let i=0; i<typedWords.length;i++ ){
        let allType = true;

        for(let j=0;j <typedWords[i].length;j++ ){
            if(brokenHash[typedWords[i][j]]){
                allType = false;
                break;
            }
        }

        if(allType){
            res += 1;
        }
    }

    return res;
};