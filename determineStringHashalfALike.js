/* 
You are given a string s of even length.Split this string into two halves of equal lengths, and let a be the first half and b be the second half.

    Two strings are alike if they have the same number of vowels('a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U').Notice that s contains uppercase and lowercase letters.

Return true if a and b are alike.Otherwise, return false.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function (s) {
    let left = 0;
    let right = s.length - 1;
    let leftCount = 0;
    let rightCount = 0;
    let hash = {
        'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1,
        'A': 1, 'E': 1, 'I': 1, 'O': 1, 'U': 1
    }
    while (left < right) {
        if (s[left] in hash) {
            leftCount++;
        }
        if (s[right] in hash) {
            rightCount++;
        }
        right--;
        left++;
    }
    return leftCount === rightCount
};