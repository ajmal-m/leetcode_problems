/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function(timeSeries, duration) {
    let arr = [];
    let startTime = null;
    let endTime = null;
    let poisonTime = 0;
    for(let i=0; i< timeSeries.length ; i++){
        // First startIndex
        if( i ==0 ){
            startTime = timeSeries[i];
            endTime = timeSeries[i] + duration - 1;
            continue;
        }

        if( timeSeries[i] > endTime){
            poisonTime += endTime - startTime + 1;
            startTime = timeSeries[i];
            endTime = timeSeries[i] + duration - 1;
        }else{
            poisonTime += timeSeries[i] - startTime;
            startTime = timeSeries[i];
            endTime = timeSeries[i] + duration - 1;
        }
    }

    poisonTime += endTime - startTime + 1;

    return poisonTime;
    
};