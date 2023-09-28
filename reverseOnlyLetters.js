/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    let arr = s.split('');
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        if (!isLetter(s[left])) {
            left++;
        } else if (!isLetter(s[right])) {
            right--;
        } else {
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;
            right--;
        }
    }
    return arr.join("")
};

var isLetter = (letter) => {
    let code = letter.charCodeAt(0);
    return ((code >= 65 && code <= 90) || (code >= 97 && code <= 122))
}

/* 
Given a string s, reverse the string according to the following rules:

All the characters that are not English letters remain in the same position.
All the English letters (lowercase or uppercase) should be reversed.
Return s after reversing it.
*/