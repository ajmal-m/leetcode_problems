/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var areAlmostEqual = function(s1, s2) {
    let diff1 = [];
    let diff2 = [];
    for(let i=0; i< s1.length; i++){
        if(s1[i] !== s2[i]){
            diff1.push(s1[i]);
            diff2.push(s2[i])
        }
    }
    return (diff1.length === 0 || (diff1.length === 2 && diff1[0] === diff2[1] && diff1[1] === diff2[0]))
};

/* 
You are given two strings s1 and s2 of equal length. A string swap is an operation where you choose two indices in a string (not necessarily different) and swap the characters at these indices.

Return true if it is possible to make both strings equal by performing at most one string swap on exactly one of the strings. Otherwise, return false.
*/