/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */
var calculateTax = function(brackets, income) {
    let totalTax = 0;
    for(let i=0; i< brackets.length; i++){
        if( income <= 0){
            break;
        }

        if( i == 0){
            if(income > brackets[0][0]){
                totalTax += (brackets[0][0] * brackets[0][1]);
                income -= brackets[0][0];
            }else{
                totalTax += (income * brackets[0][1]);
                income -= brackets[0][0];
            }
        }else{
            if( income > (brackets[i][0] - brackets[i-1][0]) ){
                totalTax += (brackets[i][0] - brackets[i-1][0])*brackets[i][1];
                income -= (brackets[i][0] - brackets[i-1][0]);
            }else{
                totalTax += income*brackets[i][1];
                income -= (brackets[i][0] - brackets[i-1][0]);
            }
        }
    }

    return totalTax/100;
};


/**
 * You are given a 0-indexed 2D integer array brackets where brackets[i] = [upperi, percenti] means that the ith tax bracket has an upper bound of upperi and is taxed at a rate of percenti. The brackets are sorted by upper bound (i.e. upperi-1 < upperi for 0 < i < brackets.length).

Tax is calculated as follows:

The first upper0 dollars earned are taxed at a rate of percent0.
The next upper1 - upper0 dollars earned are taxed at a rate of percent1.
The next upper2 - upper1 dollars earned are taxed at a rate of percent2.
And so on.
You are given an integer income representing the amount of money you earned. Return the amount of money that you have to pay in taxes. Answers within 10-5 of the actual answer will be accepted.


 * 
 * 
 */