var calPoints = function (operations) {
    let res = [];
    let n = operations.length;
    for (let i = 0; i < n; i++) {
        if (operations[i] === "C") {
            res.pop()
        } else if (operations[i] === 'D') {
            res.push(res[res.length - 1] * 2)
        } else if (operations[i] === '+') {
            res.push(res[res.length - 1] + res[res.length - 2])
        } else {
            res.push(parseInt(operations[i]))
        }
    }
    let sum = res.reduce((item, sum) => item + sum, 0)
    return sum
};

/* 
You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

An integer x.
Record a new score of x.
'+'.
Record a new score that is the sum of the previous two scores.
'D'.
Record a new score that is the double of the previous score.
'C'.
Invalidate the previous score, removing it from the record.
Return the sum of all the scores on the record after apply
*/