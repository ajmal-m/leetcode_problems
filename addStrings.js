/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    let carry = 0;
    let stack = [];
    let i = num1.length - 1;
    let j = num2.length - 1;
    while (j >= 0 || i >= 0) {
        let add = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + carry;
        stack.unshift(add % 10);
        carry = parseInt(add / 10);
        i--
        j--
    }
    if (carry === 1) {
        stack.unshift('1')
    }
    return stack.join("")
};

/* Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string. */