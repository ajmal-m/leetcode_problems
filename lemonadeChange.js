/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let hash = {
        'five':0,
        'ten':0,
        'twenty':0
    };
    for(let i=0; i< bills.length; i++){
        let bill = bills[i];

        if( bill == 5){
            hash['five']++;
        }

        if( bill == 10){
            if(hash['five']){
                hash['five']--;
                hash['ten']++;
            }else{
                return false;
            }
        }

        if(bill == 20){
            if( hash['ten'] || hash['five'] ){
                if( hash['ten'] && hash['five']){
                    hash['ten']--;
                    hash['five']--;
                }

                else if( hash['five'] >= 3){
                    hash['five']-=3;
                }else{
                    return false;
                }

                hash['twenty']++;
            }else{
                return false
            }
        }
    }

    return true
};


/**
 * 
 * At a lemonade stand, each lemonade costs $5. Customers are standing in a queue to buy from you and order one at a time (in the order specified by bills). Each customer will only buy one lemonade and pay with either a $5, $10, or $20 bill. You must provide the correct change to each customer so that the net transaction is that the customer pays $5.

Note that you do not have any change in hand at first.

Given an integer array bills where bills[i] is the bill the ith customer pays, return true if you can provide every customer with the correct change, or false otherwise.
 * 
 */