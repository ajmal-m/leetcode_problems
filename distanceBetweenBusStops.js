/*  

A bus has n stops numbered from 0 to n - 1 that form a circle. 
We know the distance between all pairs of neighboring stops where distance[i] is 
the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

*/


var distanceBetweenBusStops = function (distance, start, destination) {
    const hashMap = {};
    const len = distance.length;
    for (let i = 0; i < distance.length; i++) {
        hashMap[`${i}-${i + 1 % len}`] = distance[i];
        hashMap[`${(i + 1) % len}-${i}`] = distance[i];
    }
    let clockWise = 0;
    let antiClockWise = 0;
    // clockwise
    let initialState = start
    while (initialState != destination) {
        if (initialState === len - 1) {
            clockWise += hashMap[`${initialState}-${initialState + 1}`]
            initialState = 0
        } else {
            clockWise += hashMap[`${initialState}-${initialState + 1}`]
            initialState++;
        }
    }


    // anti clock wise movement
    let initialPost = start;
    while (initialPost != destination) {
        if (initialPost === 0) {
            antiClockWise += hashMap[`${initialPost}-${len - 1}`];
            initialPost = len - 1
        } else {
            antiClockWise += hashMap[`${initialPost}-${initialPost - 1}`]
            initialPost--;
        }
    }
    return Math.min(antiClockWise, clockWise)

};