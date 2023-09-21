/*
Given a string text, you want to use the characters of text to form as many instances of the word 
"balloon" as possible.
You can use each character in text at most once.
 Return the maximum number of instances that can be formed.
*/

var maxNumberOfBalloons = function (text) {
    const hashMap = {
        'b': 0,
        'a': 0,
        'l': 0,
        'o': 0,
        'n': 0
    }
    for (let s of text) {
        if (s in hashMap) {
            hashMap[s] += 1
        }
    }

    // find the minimum number of the 'a', 'b', 'n'

    let minElement = Infinity
    for (let key in hashMap) {
        if (key != 'l' && key != 'o') {
            if (hashMap[key] < minElement) {
                minElement = hashMap[key]
            }
        }
    }

    // find The minmum Number of The l and o

    let minOl = Infinity;
    for (let key in hashMap) {
        if (key === 'l' || key === 'o') {
            if (hashMap[key] < minOl) {
                minOl = hashMap[key]
            }
        }
    }

    // possible number of balloon
    let count = minElement;
    let status = true
    while (status) {
        if (count * 2 <= minOl) {
            status = false
        } else {
            count--
        }
    }
    return count
};