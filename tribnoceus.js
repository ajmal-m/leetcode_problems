/* 
The Tribonacci sequence Tn is defined as follows: 

T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.

Given n, return the value of Tn.
*/

var tribonacci = function (n) {
    const hashMap = {
        '0': 0,
        '1': 1,
        '2': 1
    };
    if (n === 0) {
        return 0
    }
    if (n === 1 || n === 2) {
        return 1
    }
    let index = 3;
    while (index <= n) {
        hashMap[index] = hashMap[index - 3] + hashMap[index - 2] + hashMap[index - 1];
        index += 1
    }
    return hashMap[n]
};