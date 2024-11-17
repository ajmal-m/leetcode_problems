/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function(grid) {
    let len = grid.length;
    let surfaceArea = 0;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            let n = grid[i][j];

            // Skip cells with no cubes
            if (n === 0) {
                continue;
            }

            // Add top and bottom face areas
            surfaceArea += 2;

            // Top neighbor
            let top = (i > 0) ? grid[i - 1][j] : 0;
            surfaceArea += Math.max(n - top, 0);

            // Bottom neighbor
            let bottom = (i < len - 1) ? grid[i + 1][j] : 0;
            surfaceArea += Math.max(n - bottom, 0);

            // Right neighbor
            let right = (j < len - 1) ? grid[i][j + 1] : 0;
            surfaceArea += Math.max(n - right, 0);

            // Left neighbor
            let left = (j > 0) ? grid[i][j - 1] : 0;
            surfaceArea += Math.max(n - left, 0);
        }
    }

    return surfaceArea;
};
