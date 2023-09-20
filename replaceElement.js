/* 
Given an array arr, replace every element in that array with the 
greatest element among the elements to its right, and replace the last element with -1.

After doing so, return the array.
*/

var replaceElements = function (arr) {
    for (let i = 0; i < arr.length; i++) {
        let maxNum = -Infinity;
        if (i === arr.length - 1) {
            arr[i] = -1;
            break
        }
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] > maxNum) {
                maxNum = arr[j]
            }
        }
        arr[i] = maxNum
    }
    return arr
};