/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function (n) {
    let investMoney = 1;
    let totalInvest = 0;
    let increment = 0;
    for (let i = 1; i <= n; i++) {
        if (i % 7 === 0) {
            totalInvest += increment + investMoney;
            investMoney += 1;
            increment = 0;
        } else {
            totalInvest += investMoney + increment;
            increment++
        }
    }
    return totalInvest
};

/* 
Hercy wants to save money for his first car. He puts money in the Leetcode bank every day.

He starts by putting in $1 on Monday, the first day. Every day from Tuesday to Sunday, he will put in $1 more than the day before. On every subsequent Monday, he will put in $1 more than the previous Monday.
Given n, return the total amount of money he will have in the Leetcode bank at the end of the nth day.
*/