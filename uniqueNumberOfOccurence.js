/*  
Given an array of integers arr, 
return true if the number of occurrences of each value in the array 
is unique or false otherwise.
*/

var uniqueOccurrences = function (arr) {
    let uniqueValue = true;
    const hashMap = {}
    const hashMap2 = {}
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] in hashMap) {
            hashMap[arr[i]] += 1
        } else {
            hashMap[arr[i]] = 1
        }
    }
    for (let key in hashMap) {
        if (hashMap[key] in hashMap2) {
            uniqueValue = false
            break
        } else {
            hashMap2[hashMap[key]] = hashMap[key]
        }
    }
    return uniqueValue
};