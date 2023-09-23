/**
 * @param {number} numBottles
 * @param {number} numExchange
 * @return {number}
 */

/* 

There are numBottles water bottles that are initially full of water. You can exchange numExchange empty water bottles from the market with one full water bottle.
The operation of drinking a full water  
bottle turns it into an empty bottle.
Given the two integers numBottles and numExchange, return the maximum number of water bottles you can drink.

*/
var numWaterBottles = function (numBottles, numExchange) {
    let filled = numBottles;
    let empty = 0;
    let res = 0;
    while (true) {
        if (filled === 0) {
            filled = parseInt(empty / numExchange);
            if (filled === 0) {
                break
            }
            empty = empty - (filled * numExchange)
        } else {
            res += filled;
            empty += filled;
            filled = 0
        }
    }
    return res
};