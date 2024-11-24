/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var checkValid = function(matrix) {
    let len = matrix.length;
    for(let row=0; row< len; row++){
        let hash ={}
        for(let col=0; col< len; col++){
            if(! hash[matrix[row][col]]  && matrix[row][col] <= len && matrix[row][col] >=1 ){
                hash[matrix[row][col]] = true;
            }else{
                return false;
            }
        }
    }


    for(let col=0; col < len ; col++){
        let hash = {};
        for(let row=0; row < len; row++){
            if(! hash[matrix[row][col]]  && matrix[row][col] <= len && matrix[row][col] >=1 ){
                hash[matrix[row][col]] = true;
            }else{
                return false;
            }
        }
    }

    return true;
};

/**
 * 
 * 
 * 
 * An n x n matrix is valid if every row and every column contains all the integers from 1 to n (inclusive).

Given an n x n integer matrix matrix, return true if the matrix is valid. Otherwise, return false.
 * 
 */