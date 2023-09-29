/* 
Given an integer array arr, return the mean of the remaining integers after removing the smallest 5% and the largest 5% of the elements.

Answers within 10-5 of the actual answer will be considered accepted.
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    let newArr = [...arr];
    let len = newArr.length;
    let sum = newArr.reduce((item, s) => item + s, 0);
    let num = (len) * (5 / 100);
    newArr.sort((a, b) => (b - a));
    for (let i = 0; i < num; i++) {
        sum -= newArr[i]
    }
    for (let i = len - 1; i > len - 1 - num; i--) {
        sum -= newArr[i]
    }
    return sum / (len - 2 * num)
};