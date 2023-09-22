/*  
Given a string path, where path[i] = 'N', 'S', 'E' or 'W', each representing moving one unit north, south, east, or west, respectively. You start at the origin (0, 0) on a 2D plane and walk on the path specified by path.

Return true if the path crosses itself at any point, that is, if at any time you are on a location you have previously visited. Return false otherwise.
*/

var isPathCrossing = function (path) {
    let [x, y] = [0, 0];
    let cross = false;
    let hash = { "(0,0)": true }
    for (let d of path) {
        if (d === 'N') {
            y += 1
        } else if (d === 'E') {
            x += 1
        } else if (d === 'S') {
            y -= 1
        } else {
            x -= 1
        }
        if (`(${x},${y})` in hash) {
            cross = true
            break
        } else {
            hash[`(${x},${y})`] = true
        }
    }
    return cross
};