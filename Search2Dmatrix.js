/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {

    if( matrix.length == 0 || matrix[0].length == 0){
        return false
    }
    let row = 0;
    let col = matrix[0].length-1;
    while( row < matrix.length){
        let first = matrix[row][0];
        let last = matrix[row][col];
        if( first <= target && last >= target){
            for(let i=0; i<= col; i++){
                if(matrix[row][i] == target){
                    return true;
                }
            }
            break;
        }else{
            row++;
        }
    }

    return false;
};