/**
 * 
 * You are given an integer array ranks and a character array suits. You have 5 cards where the ith card has a rank of ranks[i] and a suit of suits[i].

The following are the types of poker hands you can make from best to worst:

"Flush": Five cards of the same suit.
"Three of a Kind": Three cards of the same rank.
"Pair": Two cards of the same rank.
"High Card": Any single card.
Return a string representing the best type of poker hand you can make with the given cards.

Note that the return values are case-sensitive.

 

Example 1:

Input: ranks = [13,2,3,1,9], suits = ["a","a","a","a","a"]
Output: "Flush"
Explanation: The hand with all the cards consists of 5 cards with the same suit, so we have a "Flush".
 * 
 */



/**
 * @param {number[]} ranks
 * @param {character[]} suits
 * @return {string}
 */
var bestHand = function(ranks, suits) {
    let allSameSuits = suits.every((item) => (item == suits[0]));
    if(allSameSuits){
        return "Flush"
    }
    let h = {};
    for(let i=0; i< ranks.length; i++){
        if(h[ranks[i]]){
            h[ranks[i]] += 1;
        }else{
            h[ranks[i]] = 1;
        }
    }

    let sameranks3 = Object.values(h).some((item) => (  item >= 3 ));

    if(sameranks3){
        return "Three of a Kind"
    }

    let sameRank2 = Object.values(h).some(item => (item >= 2));

    if(sameRank2){
        return "Pair"
    }


    return "High Card"
};