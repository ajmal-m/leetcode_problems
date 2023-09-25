/**
 * @param {number[][]} grid
 * @return {number}
 */
/*You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island. */
var islandPerimeter = function (grid) {
    let row = grid.length;
    let col = grid[0].length;
    let perimeter = 0;
    let dir = [[0, 1], [0, -1], [-1, 0], [1, 0]]
    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (grid[i][j] === 1) {
                for (let [dx, dy] of dir) {
                    let newRow = i + dx;
                    let newCol = j + dy;
                    if (newRow > row - 1 || newRow < 0 || newCol > col - 1 || newCol < 0) {
                        perimeter++
                    } else if (grid[newRow][newCol] === 0) {
                        perimeter++
                    } else {

                    }
                }
            }
        }
    }
    return perimeter
};