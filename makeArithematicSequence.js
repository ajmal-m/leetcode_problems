/* 
A sequence of numbers is called an arithmetic progression if the difference between any two consecutive elements is the same.
Given an array of numbers arr, return true if the array can be rearranged to form an arithmetic progression. Otherwise, return false.
*/

var canMakeArithmeticProgression = function (arr) {
    arr.sort((a, b) => (a - b));
    let num = arr[1] - arr[0];
    let i = 0;
    while (i < arr.length - 1) {
        if (num !== arr[i + 1] - arr[i]) {
            return false
        }
        i++;
    }
    return true

};