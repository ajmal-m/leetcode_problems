/**
 * @param {number[][]} logs
 * @return {number}
 */
var maximumPopulation = function (logs) {
    let year = new Array(100).fill(0);
    let maxPopulation = 0;
    let maxYear = 0;
    for (let i = 0; i < logs.length; i++) {
        const [birth, dead] = logs[i];
        year[birth - 1950]++;
        year[dead - 1950]--;
    }
    let currentPopulation = 0;
    for (let i = 0; i < year.length; i++) {
        currentPopulation += year[i];
        if (currentPopulation > maxPopulation) {
            maxPopulation = currentPopulation;
            maxYear = i + 1950
        }
    }
    return maxYear
};

/* 

You are given a 2D integer array logs where each logs[i] = [birthi, deathi] indicates the birth and death years of the ith person.

The population of some year x is the number of people alive during that year. The ith person is counted in year x's population if x is in the inclusive range [birthi, deathi - 1]. Note that the person is not counted in the year that they die.

Return the earliest year with the maximum population.
*/