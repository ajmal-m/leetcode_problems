/**
 * @param {number[]} releaseTimes
 * @param {string} keysPressed
 * @return {character}
 */
var slowestKey = function (releaseTimes, keysPressed) {
    let hash = {};
    for (let i = 0; i < keysPressed.length; i++) {
        if (keysPressed[i] in hash) {
            let diff = (i - 1) >= 0 ? releaseTimes[i - 1] : 0;
            let sub = releaseTimes[i] - diff;
            if (sub > hash[keysPressed[i]]) {
                hash[keysPressed[i]] = sub;
            }
        } else {
            let diff = (i - 1) >= 0 ? releaseTimes[i - 1] : 0
            hash[keysPressed[i]] = releaseTimes[i] - diff;
        }
    }
    let maxString = "a";
    let max = 0;
    for (let key in hash) {
        if (hash[key] > max || (max === hash[key] && key > maxString)) {
            max = hash[key];
            maxString = key;
        }
    }
    return maxString
};
/* 
A newly designed keypad was tested, where a tester pressed a sequence of n keys, one at a time.

You are given a string keysPressed of length n, where keysPressed[i] was the ith key pressed in the testing sequence, and a sorted list releaseTimes, where releaseTimes[i] was the time the ith key was released. Both arrays are 0-indexed. The 0th key was pressed at the time 0, and every subsequent key was pressed at the exact time the previous key was released.

The tester wants to know the key of the keypress that had the longest duration. The ith keypress had a duration of releaseTimes[i] - releaseTimes[i - 1], and the 0th keypress had a duration of releaseTimes[0].

Note that the same key could have been pressed multiple times during the test, and these multiple presses of the same key may not have had the same duration.
*/