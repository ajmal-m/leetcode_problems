/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */
var decode = function (encoded, first) {
    let arr = new Array(encoded.length + 1);
    let n = encoded.length;
    arr[0] = first;
    for (let i = 0; i < n; i++) {
        arr[i + 1] = arr[i] ^ encoded[i]
    }
    return arr
};

/* 
There is a hidden integer array arr that consists of n non-negative integers.

It was encoded into another integer array encoded of length n - 1, such that encoded[i] = arr[i] XOR arr[i + 1]. For example, if arr = [1,0,2,1], then encoded = [1,2,3].

You are given the encoded array. You are also given an integer first, that is the first element of arr, i.e. arr[0].

Return the original array arr. It can be proved that the answer exists and is unique.
*/