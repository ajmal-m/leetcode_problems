/*  

Given an integer n, return any array containing n unique integers such that they add up to 0.
*/

var sumZero = function (n) {
    let res = new Array(n).fill(0);
    if (n % 2 === 0) {
        let index = 0
        let middle = n / 2
        for (let i = middle; i >= 1; i--) {
            res[index] = -1 * i;
            res[n - 1 - index] = i;
            index++
        }
    } else {
        let middle = Math.floor(n / 2);
        let index = 0
        for (let i = middle; i >= 1; i--) {
            res[index] = -1 * i;
            res[n - 1 - index] = i;
            index++;
        }
    }
    return res
};