/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
    let count = 0;
    while (n >= 5) {
        n = Math.floor(n / 5)
        count  += n
    }
    return count
};

/*
Given an integer n, return the number of trailing zeroes in n!.

Note that n! = n * (n - 1) * (n - 2) * ... * 3 *



 */