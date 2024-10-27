/**
 * 
 * 
 * An integer divisible by the sum of its digits is said to be a Harshad number. 
 * You are given an integer x. Return the sum of the digits of x if x is a Harshad number, otherwise, return -1.
 */


/**
 * @param {number} x
 * @return {number}
 */
var sumOfTheDigitsOfHarshadNumber = function(x) {
    let sum = 0;
    let num = x;
    while(num > 0){
        sum += (num % 10);
        num = Math.floor(num/10);
    }

    if(x % sum == 0){
        return sum;
    }else{
        return -1
    }
};