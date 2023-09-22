/* You are given a string s formed by digits and '#'. We want to map s to English lowercase characters as follows:

Characters ('a' to 'i') are represented by ('1' to '9') respectively.
Characters ('j' to 'z') are represented by ('10#' to '26#') respectively.
Return the string formed after mapping.

The test cases are generated so that a unique mapping will always exist. */

var freqAlphabets = function (s) {
    const hash = {};
    const stack = [];
    const letter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    for (let i = 0; i < 26; i++) {
        hash[i + 1] = letter[i]
    }
    for (let letter of s) {
        if (letter === '#') {
            let str = "";
            let lastItem = stack.pop()
            let firstItem = stack.pop()
            str += firstItem + lastItem
            stack.push(str)
        } else {
            stack.push(letter)
        }
    }
    let result = "";
    for (let i = 0; i < stack.length; i++) {
        result += hash[stack[i]]
    }
    return result
};