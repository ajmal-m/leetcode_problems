/**
 * @param {number[][]} mat
 * @return {number[]}
 */
var rowAndMaximumOnes = function (mat) {
    let index = 0;
    let maxCount = 0;
    for (let i = 0; i < mat.length; i++) {
        let count = 0
        for (let j = 0; j < mat[i].length; j++) {
            if (mat[i][j] === 1) {
                count++
            }
        }
        if (count > maxCount) {
            maxCount = count;
            index = i;
        }
    }
    return [index, maxCount]
};