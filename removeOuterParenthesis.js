/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let res = "";
    let result = ""
    let stack = [];
    let str = "";
    let hash = { '(': ')' }
    for (let i = 0; i < s.length; i++) {
        if (s[i] in hash) {
            stack.push(s[i]);
            str += s[i];
        } else if (hash[stack.pop()] === s[i]) {
            str += s[i];
        }
        if (stack.length === 0) {
            result += str.slice(1, str.length - 1);
            str = ""
        }
    }
    return result
};
/*  
A valid parentheses string is either empty "", "(" + A + ")", or A + B, where A and B are valid parentheses strings, and + represents string concatenation.

For example, "", "()", "(())()", and "(()(()))" are all valid parentheses strings.
A valid parentheses string s is primitive if it is nonempty, and there does not exist a way to split it into s = A + B, with A and B nonempty valid parentheses strings.

Given a valid parentheses string s, consider its primitive decomposition: s = P1 + P2 + ... + Pk, where Pi are primitive valid parentheses strings.

Return s after removing the outermost parentheses of every primitive string in the primitive decomposition of s.
*/