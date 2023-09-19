/*
 Given an array of integers arr, 
 a lucky integer is an integer that has a frequency in the array equal to its value.
 Return the largest lucky integer in the array. If there is no lucky integer return -1.
 */


var findLucky = function (arr) {
    let hashMap = {};
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in hashMap) {
            hashMap[arr[i]] += 1
        } else {
            hashMap[arr[i]] = 1
        }
    }
    let temp = 0
    let luckyInt;
    for (let key in hashMap) {
        if (temp === 0 && key == hashMap[key]) {
            luckyInt = hashMap[key]
            temp++;
        } else if (temp !== 0 && key == hashMap[key]) {
            if (hashMap[key] > luckyInt) {
                luckyInt = hashMap[key]
            }
        }
    }
    return luckyInt || -1
};