/**
 * 
 * 
Topics
Companies
Hint
You are given a 0-indexed string s typed by a user. Changing a key is defined as using a key different from the last used key. For example, s = "ab" has a change of a key while s = "bBBb" does not have any.

Return the number of times the user had to change the key.

Note: Modifiers like shift or caps lock won't be counted in changing the key tha
 * 
 */


/**
 * @param {string} s
 * @return {number}
 */
var countKeyChanges = function(s) {
    let changingkey = 0;
    for(let i=1; i < s.length; i++){
        if( s[i] != s[i-1].toLowerCase() && s[i] != s[i-1].toUpperCase()){
            changingkey++;
        }
    }

    return changingkey;
};