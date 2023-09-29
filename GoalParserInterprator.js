/**
 * @param {string} command
 * @return {string}
 */
var interpret = function (command) {
    let res = "";
    let i = 0;
    while (i < command.length) {
        if (command[i] === 'G') {
            res += "G"
            i++;
        } else if (command[i] === '(' && command[i + 1] === ')') {
            res += 'o';
            i += 2;
        } else {
            res += 'al';
            i += 4
        }
    }
    return res
};

/* 
You own a Goal Parser that can interpret a string command. The command consists of an alphabet of "G", "()" and/or "(al)" in some order. The Goal Parser will interpret "G" as the string "G", "()" as the string "o", and "(al)" as the string "al". The interpreted strings are then concatenated in the original order.

Given the string command, return the Goal Parser's interpretation of command.
*/