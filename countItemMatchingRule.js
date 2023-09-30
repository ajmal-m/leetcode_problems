/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
    let hash = { 'type': 0, 'color': 1, 'name': 2 };
    let res = 0;
    for (let i = 0; i < items.length; i++) {
        if (items[i][hash[ruleKey]] === ruleValue) {
            res++
        }
    }
    return res
};

/*
You are given an array items, where each items[i] = [typei, colori, namei] describes the type, color, and name of the ith item. You are also given a rule represented by two strings, ruleKey and ruleValue.
*/