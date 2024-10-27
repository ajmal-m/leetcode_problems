/**
 * 
 * 
 * You are given a 0-indexed integer array nums of even length and there is also an empty array arr. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

Every round, first Alice will remove the minimum element from nums, and then Bob does the same.
Now, first Bob will append the removed element in the array arr, and then Alice does the same.
The game continues until nums becomes empty.
Return the resulting array arr.
 * 
 */


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var numberGame = function(nums) {
    nums = nums.sort((a,b) => (b-a));
    let arr = [];
    while(nums.length != 0){
        let alice = nums.pop();
        let bob = nums.pop();
        arr.push(bob);
        arr.push(alice);
    }

    return arr;
};