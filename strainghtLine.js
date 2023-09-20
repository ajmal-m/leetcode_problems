/*  
You are given an array coordinates, 
coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. 
Check if these points make a straight line in the XY plane.

*/

var checkStraightLine = function (coordinates) {
    if (coordinates.length === 2) {
        return true
    }
    const [x_1, y_1] = coordinates[0];
    const [x_2, y_2] = coordinates[1];
    let slope;
    if (x_2 - x_1 === 0) {
        slope = Infinity
    } else {
        slope = (y_2 - y_1) / (x_2 - x_1);
    }
    let lineExist = true
    let m
    for (let i = 0; i < coordinates.length - 1; i++) {
        const [x1, y1] = coordinates[i];
        const [x2, y2] = coordinates[i + 1];
        if (x2 - x1 === 0) {
            m = Infinity;
        } else {
            m = (y2 - y1) / (x2 - x1);
        }
        if (m !== slope) {
            lineExist = false
            break
        }
    }
    return lineExist
};