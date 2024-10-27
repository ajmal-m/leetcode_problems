/**
 * 
 * 
 * You are given a string moves of length n consisting only of characters 'L', 'R', and '_'. The string represents your movement on a number line starting from the origin 0.

In the ith move, you can choose one of the following directions:

move to the left if moves[i] = 'L' or moves[i] = '_'
move to the right if moves[i] = 'R' or moves[i] = '_'
Return the distance from the origin of the furthest point you can get to after n moves.
 * 
 */



/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {
    let count = 0;
    let pos = 0;
    for(let i=0; i< moves.length;i++){
        if(moves[i] == "L"){
            pos-=1;
        }else if(moves[i] == "R"){
            pos+=1
        }else{
            count++;
        }
    }

    count = count < 0 ? -1 *count : count;
    pos = pos < 0 ? -1*pos : pos;
    pos += count;

    return pos

};