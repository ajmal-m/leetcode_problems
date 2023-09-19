/*

    You are given the array paths, where paths[i] = [cityAi, cityBi] 
    means there exists a direct path going from cityAi to cityBi. 
    Return the destination city, that is, the city without any path outgoing to another city.
    It is guaranteed that the graph of paths forms a line without any loop, therefore, 
    there will be exactly one destination city.

*/
var destCity = function (paths) {
    let destignation = paths[0][1];
    let status = true
    while (status) {
        let exist = false;
        for (let i = 0; i < paths.length; i++) {
            if (destignation === paths[i][0]) {
                exist = true
                destignation = paths[i][1]
            }
        }
        if (!exist) {
            status = false
        }

    }
    return destignation
};