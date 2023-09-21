/*  
In a town, there are n people labeled from 1 to n. There is a rumor that one of these people is secretly the town judge.

If the town judge exists, then:

The town judge trusts nobody.
Everybody (except for the town judge) trusts the town judge.
There is exactly one person that satisfies properties 1 and 2.
You are given an array trust where trust[i] = [ai, bi] representing that the person labeled ai trusts the person labeled bi. If a trust relationship does not exist in trust array, then such a trust relationship does not exist.

Return the label of the town judg

*/


var findJudge = function (n, trust) {
    const arr = Array(n + 1).fill(0);
    for (let i = 0; i < trust.length; i++) {
        arr[trust[i][0]] -= 1
        arr[trust[i][1]] += 1
    }
    for (let i = 1; i <= n; i++) {
        if (arr[i] === n - 1) {
            return i
        }
    }
    return -1
};