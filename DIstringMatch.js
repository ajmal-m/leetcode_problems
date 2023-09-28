/**
 * @param {string} s
 * @return {number[]}
 */
var diStringMatch = function (s) {
    let n = s.length;
    let perm = new Array(n + 1).fill(-1);
    let min = 0;
    let max = n;
    for (let i = 0; i < n; i++) {
        if (s[i] === 'I') {
            perm[i] = min;
            min++
        } else {
            perm[i] = max;
            max--;
        }
    }
    perm[n] = min;
    return perm
};

/* 
A permutation perm of n + 1 integers of all the integers in the range [0, n] can be represented as a string s of length n where:

s[i] == 'I' if perm[i] < perm[i + 1], and
s[i] == 'D' if perm[i] > perm[i + 1].
Given a string s, reconstruct the permutation perm and return it. If there are multiple valid permutations perm, return any of them.
*/