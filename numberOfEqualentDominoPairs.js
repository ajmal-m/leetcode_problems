/**
 * @param {number[][]} dominoes
 * @return {number}
 */
var numEquivDominoPairs = function (dominoes) {
    let hash = {};
    let result = 0;
    for (let domino of dominoes) {
        let sortedDomino = domino.sort((a, b) => (a - b));
        if (sortedDomino in hash) {
            result += hash[sortedDomino]
            hash[sortedDomino] += 1;
        } else {
            hash[sortedDomino] = 1;
        }
    }
    return result
};

/*  

Given a list of dominoes, dominoes[i] = [a, b] is equivalent to dominoes[j] = [c, d] if and only if either (a == c and b == d), or (a == d and b == c) - that is, one domino can be rotated to be equal to another domino.

Return the number of pairs (i, j) for which 0 <= i < j < dominoes.length, and dominoes[i] is equivalent to dominoes[j].
*/