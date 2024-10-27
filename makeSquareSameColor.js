/**
 * 
 * You are given a 2D matrix grid of size 3 x 3 consisting only of characters 'B' and 'W'. Character 'W' represents the white color, and character 'B' represents the black color.

Your task is to change the color of at most one cell so that the matrix has a 2 x 2 square where all cells are of the same color.

Return true if it is possible to create a 2 x 2 square of the same color, otherwise, return false
 * 
 */


/**
 * @param {character[][]} grid
 * @return {boolean}
 */
var canMakeSquare = function(grid) {
    for(let i=0; i< grid.length-1; i++){
        for(let j=0; j< grid[i].length-1; j++){
            let hash = {};
            if(hash[grid[i][j]]){
                hash[grid[i][j]] += 1;
            }else{
                hash[grid[i][j]] = 1;
            }

            if(i != grid.length-1){
                if(hash[grid[i+1][j]]){
                hash[grid[i+1][j]] += 1;
            }else{
                hash[grid[i+1][j]] = 1;
            }
            }

            if(hash[grid[i][j+1]]){
                hash[grid[i][j+1]] += 1;
            }else{
                hash[grid[i][j+1]] = 1;
            }

            if(i!= grid.length-1 ){
                if(hash[grid[i+1][j+1]]){
                hash[grid[i+1][j+1]] += 1;
            }else{
                hash[grid[i+1][j+1]] = 1;
            }
            }


            for(let key in hash){
                if(hash[key] == 1){
                    return true
                }else if(hash[key] == 4){
                    return true
                }
            }
        }
    }

    return false
};