/**
 * @param {number} n
 * @return {string[]}
 */
/* 
Given an integer n, return a string array answer (1-indexed) where:

answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
answer[i] == "Fizz" if i is divisible by 3.
answer[i] == "Buzz" if i is divisible by 5.
answer[i] == i (as a string) if none of the above conditions are true.
*/
var fizzBuzz = function (n) {
    const answer = new Array(n).fill(0);
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            answer[i - 1] = "FizzBuzz"
        } else if (i % 3 === 0) {
            answer[i - 1] = "Fizz"
        } else if (i % 5 === 0) {
            answer[i - 1] = "Buzz"
        } else {
            answer[i - 1] = i.toString()
        }
    }
    return answer
};