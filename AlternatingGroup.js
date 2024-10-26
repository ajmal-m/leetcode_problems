/**

There is a circle of red and blue tiles. You are given an array of integers colors. The color of tile i is represented by colors[i]:

colors[i] == 0 means that tile i is red.
colors[i] == 1 means that tile i is blue.
Every 3 contiguous tiles in the circle with alternating colors (the middle tile has a different color from its left and right tiles) is called an alternating group.

Return the number of alternating groups.

Note that since colors represents a circle, the first and the last tiles are considered to be next to each other.

*/


/**
 * @param {number[]} colors
 * @return {number}
 */
var numberOfAlternatingGroups = function(colors) {
    let res = 0;
    for(let i=0; i< colors.length; i++){
        if(i==0 && colors[i+1] == colors[colors.length-1] && colors[i] != colors[i+1]){
            res++;
        }else if( i == colors.length-1 && colors[i-1] == colors[0] && colors[i] != colors[0] ){
            res++;
        }else if( colors[i-1] == colors[i+1] && colors[i] != colors[i-1]){
            res++;
        }
    }

    return res;
};