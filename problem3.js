/*

A school is trying to take an annual photo of all the students. 
The students are asked to stand in a single file line in non-decreasing order by height. 
Let this ordering be represented by the integer array expected where expected[i] is the expected height of 
the ith student in line.
You are given an integer array heights representing the current order that the students are standing in.
Each heights[i] is the height of the ith student in line (0-indexed).
Return the number of indices where heights[i] != expected[i].

 */

var heightChecker = function (heights) {
    const originalArray = [...heights];
    const expected = [...heights];
    for (let i = 0; i < expected.length; i++) {
        for (let j = i + 1; j < expected.length; j++) {
            if (expected[i] > expected[j]) {
                const temp = expected[i];
                expected[i] = expected[j];
                expected[j] = temp;
            }
        }
    }
    let index = 0;
    for (let i = 0; i < originalArray.length; i++) {
        if (originalArray[i] !== expected[i]) {
            index += 1
        }
    }
    return index
};