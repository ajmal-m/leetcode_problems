/**
 * 
 * 
 * You are given two strings s1 and s2, both of length 4, consisting of lowercase English letters.

You can apply the following operation on any of the two strings any number of times:

Choose any two indices i and j such that j - i = 2, then swap the two characters at those indices in the string.
Return true if you can make the strings s1 and s2 equal, and false otherwise.
 * 
 */


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    let s1Arr = [];
    let s2Arr = [];

    if(s1 == s2){
        return true
    }

    let swapedS1 = s1.split("");
    let c = swapedS1[0];
    swapedS1[0] = swapedS1[2];
    swapedS1[2] = c;
    swapedS1 = swapedS1.join("")
    s1Arr.push(swapedS1)


    swapedS1 = s1.split("");
    c = swapedS1[1];
    swapedS1[1] = swapedS1[3];
    swapedS1[3] = c;
    swapedS1 = swapedS1.join("")
    s1Arr.push(swapedS1)


    swapedS1 = s1.split("");
    c = swapedS1[0];
    swapedS1[0] = swapedS1[2];
    swapedS1[2] = c;

    c = swapedS1[1];
    swapedS1[1] = swapedS1[3];
    swapedS1[3] = c;
    swapedS1 = swapedS1.join("")
    s1Arr.push(swapedS1)



    swapedS1 = s2.split("");
    c = swapedS1[0];
    swapedS1[0] = swapedS1[2];
    swapedS1[2] = c;
    swapedS1 = swapedS1.join("")
    s2Arr.push(swapedS1)


    swapedS1 = s2.split("");
    c = swapedS1[1];
    swapedS1[1] = swapedS1[3];
    swapedS1[3] = c;
    swapedS1 = swapedS1.join("")
    s2Arr.push(swapedS1)


    swapedS1 = s2.split("");
    c = swapedS1[0];
    swapedS1[0] = swapedS1[2];
    swapedS1[2] = c;
    

    c = swapedS1[1];
    swapedS1[1] = swapedS1[3];
    swapedS1[3] = c;
    swapedS1 = swapedS1.join("")
    s2Arr.push(swapedS1);


    if(s1Arr.includes(s2) || s2Arr.includes(s1)){
        return true
    }else{
        return false
    }
};


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var canBeEqual = function(s1, s2) {
    const pair1_s1 = [s1[0], s1[2]].sort().join('');
    const pair2_s1 = [s1[1], s1[3]].sort().join('');
    const pair1_s2 = [s2[0], s2[2]].sort().join('');
    const pair2_s2 = [s2[1], s2[3]].sort().join('');
    
    // Check if both pairs match
    return pair1_s1 === pair1_s2 && pair2_s1 === pair2_s2;
};