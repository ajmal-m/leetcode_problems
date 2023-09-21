/**
 * @param {string[]} words
 * @return {string[]}
 */

/*  
Given a string array words, return an array of all characters that show up in all strings within the words 
(including duplicates).
 You may return the answer in any order.

*/

var commonChars = function (words) {
    const hashMap = {};
    const len = words.length;
    const result = [];
    for (let i = 0; i < len; i++) {
        for (let word of words[i]) {
            if (word in hashMap) {
                hashMap[word]['every'][i] = true
                hashMap[word]['count'][i] += 1
            } else {
                hashMap[word] = { count: new Array(len).fill(0), every: new Array(len).fill(false) }
                hashMap[word]['every'][i] = true;
                hashMap[word]['count'][i] = 1
            }
        }
    }
    for (let keyLetter in hashMap) {
        let everyList = hashMap[keyLetter]['every'];
        let countList = hashMap[keyLetter]['count'];
        let everyThingTrue = true;
        for (let i = 0; i < everyList.length; i++) {
            if (everyList[i] === false) {
                everyThingTrue = false
                break
            }
        }
        let minCount = Infinity
        if (everyThingTrue) {
            for (let i = 0; i < countList; i++) {
                if (countList[i] < minCount) {
                    minCount = countList[i]
                }
            }
            for (let i = 0; i < minCount; i++) {
                result.push(keyLetter)
            }
        }
    }
    return result

};