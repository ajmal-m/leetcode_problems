/**
 * @param {number[]} score
 * @return {string[]}
 */

/*  
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
*/
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let newScore = [...score].sort((a, b) => (b - a));
    let hash = {};
    for (let i = 0; i < newScore.length; i++) {
        hash[newScore[i]] = i + 1
    }
    for (let i = 0; i < score.length; i++) {
        if (hash[score[i]] === 1) {
            score[i] = "Gold Medal"
        } else if (hash[score[i]] === 2) {
            score[i] = "Silver Medal"
        } else if (hash[score[i]] === 3) {
            score[i] = "Bronze Medal"
        } else {
            score[i] = hash[score[i]].toString()
        }
    }
    return score
};
