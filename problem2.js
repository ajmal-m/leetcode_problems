/* 
You are given two integer arrays of equal length target and arr. 
In one step, you can select any non-empty subarray of arr and reverse it. 
You are allowed to make any number of steps.

Return true if you can make arr equal to target or false otherwise.
*/
var canBeEqual = function (target, arr) {
    const hashMap = {};
    for (let i = 0; i < target.length; i++) {
        if (target[i] in hashMap) {
            hashMap[target[i]] += 1
        } else {
            hashMap[target[i]] = 1
        }
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in hashMap) {
            hashMap[arr[i]] -= 1
        }
    }
    let allZero = true
    for (let key in hashMap) {
        if (hashMap[key] > 0) {
            allZero = false
        }
    }
    return allZero
};