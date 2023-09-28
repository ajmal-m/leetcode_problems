/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if (arr.length < 3) {
        return false
    }
    let slack = false;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            return false
        } else if (arr[i + 1] < arr[i]) {
            slack = i;
            break;
        }
    }
    for (let j = slack; j < arr.length - 1; j++) {
        if (arr[j] === arr[j + 1]) {
            return false
        } else if (arr[j + 1] > arr[j]) {
            return false
        }
    }
    return slack
};
/* 
Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
*/