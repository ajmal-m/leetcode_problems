var replaceDigits = function (s) {
    let res = "";
    for (let i = 0; i < s.length; i++) {
        if (i % 2 === 1) {
            // odd
            res += String.fromCharCode(s[i - 1].charCodeAt(0) + parseInt(s[i]))
        } else {
            // even 
            res += s[i]
        }
    }
    return res
};

/* 
You are given a 0-indexed string s that has lowercase English letters in its even indices and digits in its odd indices.

There is a function shift(c, x), where c is a character and x is a digit, that returns the xth character after c.

For example, shift('a', 5) = 'f' and shift('x', 0) = 'x'.
For every odd index i, you want to replace the digit s[i] with shift(s[i-1], s[i]).

Return s after replacing all digits. It is guaranteed that shift(s[i-1], s[i]) will never exceed 'z'.
*/