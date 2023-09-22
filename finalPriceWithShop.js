
/* 
You are given an integer array prices where prices[i] is the price of the ith item in a shop.

There is a special discount for items in the shop. If you buy the ith item, then you will receive a discount equivalent to prices[j] where j is the minimum index such that j > i and prices[j] <= prices[i]. Otherwise, you will not receive any discount at all.

Return an integer array answer where answer[i] is the final price you will pay for the ith item of the shop, considering the special discount.
*/
var finalPrices = function (prices) {
    for (let i = 0; i < prices.length; i++) {
        let discountIndex;
        for (j = i + 1; j < prices.length; j++) {
            if (j > i && prices[i] >= prices[j]) {
                discountIndex = j
                break
            }
        }
        if (discountIndex) {
            prices[i] -= prices[discountIndex]
        }
    };
    return prices
};