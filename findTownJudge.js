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

    if (trust.length === 1) {
        return trust[0][1]
    }
    if (n === 1 && trust.length === 0) {
        return 1
    }
    if (n !== 1 && trust.length === 0) {
        return -1
    }
    // create hash table
    const hash = {};
    for (let i = 0; i < trust.length; i++) {
        const [person, trustPerson] = trust[i];
        if (person in hash) {
            hash[person] = { ...hash[person], [trustPerson]: trustPerson }
        } else {
            hash[person] = { [trustPerson]: trustPerson }
        }
    }
    let firstHash;
    // extract the fitst object of the key in hash table
    for (let key in hash) {
        firstHash = hash[key]
        break;
    }
    let judgeList = [];
    // common Relatited to other
    for (let firstHashKey in firstHash) {
        let common = true;
        for (let key in hash) {
            if (!(firstHashKey in hash[key])) {
                common = false
                break
            }
        }
        if (common) {
            judgeList = [...judgeList, firstHashKey]
        }
    }

    // check the common not involved in the all field

    let judge;
    for (let i in judgeList) {
        if (!(judgeList[i] in hash)) {
            judge = judgeList[i]
            break
        }
    }

    const allNum = {};
    for (let i = 0; i < trust.length; i++) {
        const [a, b] = trust[i];
        if (b != judge) {
            if (!(b in allNum)) {
                allNum[b] = b
            }
        }
        if (!(a in allNum)) {
            allNum[a] = a
        }
    }
    let allOccur = true;
    for (let key in allNum) {
        let state = false
        for (let i = 0; i < trust.length; i++) {
            if (trust[i][0] == key && trust[i][1] == judge) {
                state = true;
                break
            }
        }
        if (!state) {
            allOccur = false
            break
        }
    }

    return (allOccur && judge) ? judge : -1
};