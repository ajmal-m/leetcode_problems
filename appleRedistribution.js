/**
 * 
 * into Boxes
Solved
Easy
Topics
Companies
Hint
You are given an array apple of size n and an array capacity of size m.

There are n packs where the ith pack contains apple[i] apples. There are m boxes as well, and the ith box has a capacity of capacity[i] apples.

Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes.

Note that, apples from the same pack can be distributed into different boxes.
 * 
 */


/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */
var minimumBoxes = function(apple, capacity) {
    let capacitySort = capacity.sort((a,b) => (b-a));
    let totalApple = apple.reduce((item, acc) => (item+acc), 0);
    let res = 0;
    let index = 0;
    while(totalApple > 0){
        totalApple -= capacitySort[index];
        index++;
        res++;
    }

    return res;
};