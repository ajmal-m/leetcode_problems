/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function(list1, list2) {
    let hash = {};
    let commonString = {};
    let res = []
    for(let i=0; i< list1.length;i++){
        hash[list1[i]] = i
    }
    for(let i=0; i< list2.length; i++){
        if(list2[i] in hash){
            let sum = i + hash[list2[i]]
            if(sum in commonString){
                commonString[sum].push(list2[i])
            }else{
                commonString[sum] = [list2[i]]
            }
        }
    }
    let minIndex = Math.min(...Object.keys(commonString))
    res.push(...commonString[minIndex]);
    return res
};
/* 
Given two arrays of strings list1 and list2, find the common strings with the least index sum.

A common string is a string that appeared in both list1 and list2.

A common string with the least index sum is a common string such that if it appeared at list1[i] and list2[j] then i + j should be the minimum value among all the other common strings.

Return all the common strings with the least index sum. Return the answer in any order.
*/