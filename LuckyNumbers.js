/*

Given an m x n matrix of distinct numbers, 
return all lucky numbers in the matrix in any order.
A lucky number is an element of the matrix such that it is the minimum element in 
its row and maximum in its column.

*/
var luckyNumbers = function (matrix) {
    let luckyNumber = []
    for (let i = 0; i < matrix.length; i++) {
        let minIndex = 0
        // find the minmum value in a row
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][minIndex] > matrix[i][j]) {
                minIndex = j
            }
        }
        // check the this value is the maximum value in the column
        let maxElement = matrix[i][minIndex];
        let maxValue = true
        for (let k = 0; k < matrix.length; k++) {
            if (maxElement < matrix[k][minIndex]) {
                maxValue = false
                break
            }
        }
        if (maxValue) {
            luckyNumber.push(maxElement)
        }

    }
    return luckyNumber
};