/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
    let i = 0;
    while ((3 ** i) <= n) {
        if (n === 3 ** i) {
            return true
        }
        i++
    }
    return false
};
/*
Given an integer n, return true if it is a power of three. Otherwise, return false.

An integer n is a power of three, if there exists an integer x such that n == 3x.
*/