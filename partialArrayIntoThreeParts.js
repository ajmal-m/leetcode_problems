var canThreePartsEqualSum = function (arr) {
    let sum = 0;
    arr.forEach((item) => { sum += item });
    if (sum % 3 !== 0) {
        return false
    }
    let n = sum / 3;
    let count = 0;
    let countTime = 0;
    for (let item of arr) {
        count += item;
        if (count === n) {
            count = 0;
            countTime += 1
        }
    }
    return countTime >= 3;
};
/*  
Given an array of integers arr, return true if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i + 1 < j with (arr[0] + arr[1] + ... + arr[i] == arr[i + 1] + arr[i + 2] + ... + arr[j - 1] == arr[j] + arr[j + 1] + ... + arr[arr.length - 1])
*/