/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let len = s.length;
    for (let i = 1; i <= len / 2; i++) {
        let subString = s.slice(0, i);
        let res = ""
        for (let j = 1; j <= parseInt(len / subString.length); j++) {
            res += subString
        }
        if (res === s) {
            return true
        }
    }
    return false
};