var fib = function (n) {
    let res = new Array(n + 1).fill(0);
    if (n === 0) {
        return 0
    }
    if (n === 1) {
        return 1
    }
    res[1] = 1
    for (let i = 2; i <= n; i++) {
        res[i] = res[i - 1] + res[i - 2]
    }
    return res[n]
};
/* 
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,
*/