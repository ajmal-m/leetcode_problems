/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary. Answers within 10-5 of the actual answer will be accepted.
*/
var average = function (salary) {
    const s = salary.sort((a, b) => (b - a));
    let sum = 0;
    for (let i = 0; i < s.length; i++) {
        if (i !== 0 && i !== s.length - 1) {
            sum += s[i]
        }
    }
    return sum / (s.length - 2)
};

// with out sort method


var average = function (salary) {
    let maxSalary = salary[0];
    let minSalary = salary[0];
    let sum = 0;
    let len = salary.length;
    for (let i = 0; i < len; i++) {
        let currentSalary = salary[i];
        sum += currentSalary;
        if (currentSalary > maxSalary) {
            maxSalary = currentSalary
        } else if (currentSalary < minSalary) {
            minSalary = currentSalary;
        }
    }
    return (sum - minSalary - maxSalary) / (len - 2)

};