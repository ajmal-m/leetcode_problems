/**
 * @param {number[]} score
 * @return {string[]}
 */

/*  
You are given an integer array score of size n, where score[i] is the score of the ith athlete in a competition. All the scores are guaranteed to be unique.

The athletes are placed based on their scores, where the 1st place athlete has the highest score, the 2nd place athlete has the 2nd highest score, and so on. The placement of each athlete determines their rank:
*/
var findRelativeRanks = function (score) {
    let newScore = [...score];
    newScore.sort((a, b) => (b - a));
    for (let i = 0; i < newScore.length; i++) {
        for (let j = 0; j < score.length; j++) {
            if (newScore[i] === score[j] && i === 0) {
                score[j] = "Gold Medal"
            } else if (newScore[i] === score[j] && i === 1) {
                score[j] = "Silver Medal"
            } else if (newScore[i] === score[j] && i === 2) {
                score[j] = "Bronze Medal"
            } else if (newScore[i] === score[j]) {
                score[j] = (i + 1).toString()
            }
        }
    }
    return score
};