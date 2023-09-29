/* 
Given two arrays arr1 and arr2, the elements of arr2 are distinct, and all elements in arr2 are also in arr1.

Sort the elements of arr1 such that the relative ordering of items in arr1 are the same as in arr2. Elements that do not appear in arr2 should be placed at the end of arr1 in ascending order.
*/


/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let hash = {};
    for (let i = 0; i < arr2.length; i++) {
        hash[arr2[i]] = i;
    }
    arr1.sort((a, b) => {
        let indexA = a in hash ? hash[a] : arr2.length + a;
        let indexB = b in hash ? hash[b] : arr2.length + b;
        return indexA - indexB
    })
    return arr1
};