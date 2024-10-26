/**
 * 
 * 
 * There is a snake in an n x n matrix grid and can move in four possible directions. Each cell in the grid is identified by the position: grid[i][j] = (i * n) + j.

The snake starts at cell 0 and follows a sequence of commands.

You are given an integer n representing the size of the grid and an array of strings commands where each command[i] is either "UP", "RIGHT", "DOWN", and "LEFT". It's guaranteed that the snake will remain within the grid boundaries throughout its movement.

Return the position of the final cell where the snake ends up after executing commands.
 * 
 */

/**
 * @param {number} n
 * @param {string[]} commands
 * @return {number}
 */
var finalPositionOfSnake = function(n, commands) {
    let iPos = 0;
    let jPos = 0;
    for(let command of commands){
        if(command == "UP"){
            iPos -=1;
        }else if(command == "RIGHT"){
            jPos += 1;
        }else if(command == "DOWN"){
            iPos += 1;
        }else if(command == "LEFT"){
            jPos -= 1;
        }else{

        }
    }

    return ((iPos * n) + jPos)
};