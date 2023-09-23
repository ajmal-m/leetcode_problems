/**
 * @param {number[][]} nums
 * @return {number}
 */

/*
You are given a 0-indexed two-dimensional integer array nums.

Return the largest prime number that lies on at least one of the diagonals of nums. In case, no prime is present on any of the diagonals, return 0.

Note that:

An integer is prime if it is greater than 1 and has no positive integer divisors other than 1 and itself.
An integer val is on one of the diagonals of nums if there exists an integer i for which nums[i][i] = val or an i for which nums[i][nums.length - i - 1] = val.
*/
var diagonalPrime = function (nums) {
    let len = nums.length;
    let max = 0;
    for (let i = 0; i < len; i++) {
        if (isPrime(nums[i][i]) && nums[i][i] > max) {
            max = nums[i][i];
        }
    }
    for (let i = 0; i < len; i++) {
        if (isPrime(nums[i][len - 1 - i]) && nums[i][len - 1 - i] > max) {
            max = nums[i][len - 1 - i]
        }
    }
    return max
};

var isPrime = (num) => {
    if (num === 1) {
        return false
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false
        }
    }
    return true
}