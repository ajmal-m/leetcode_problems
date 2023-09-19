/* 
   The power of the string is the maximum length of a non-empty 
   substring that contains only one unique character.
   Given a string s, return the power of s.
*/
var maxPower = function (s) {
    let power = 0;
    let stack = [];
    let currentPower;
    for (let i = 0; i < s.length; i++) {
        if (s[i] !== stack[0]) {
            stack[0] = s[i];
            currentPower = 1
            if (currentPower > power) {
                power = currentPower;
            }
        } else {
            currentPower += 1
            if (currentPower > power) {
                power = currentPower;
            }
        }
    }
    return power
};