/**
 * Input: rings = "B0B6G0R6R0R6G9"
Output: 1
Explanation: 
- The rod labeled 0 holds 3 rings with all colors: red, green, and blue.
- The rod labeled 6 holds 3 rings, but it only has red and blue.
- The rod labeled 9 holds only a green ring.
Thus, the number of rods with all three colors is 1.
 * 
 * 
 * 
 */



/**
 * @param {string} rings
 * @return {number}
 */
var countPoints = function(rings) {
    /**
      {
        0:{
            B:1,
            G:1,
            B:1
        },
        1:{
            B:1,
            G:1
        }
      }

      "B0B6G0R6R0R6G9"
    
     */
     let hash = {};
     let res = 0;
     for(let i=0;i< rings.length; i+=2){
        if(hash[rings[i+1]]){
            if(!hash[rings[i+1]][rings[i]]){
                hash[rings[i+1]][rings[i]] = 1;
            }
        }else{
            hash[rings[i+1]] = {};
            hash[rings[i+1]][rings[i]] = 1;
        }
     }

     for(let key in hash){
        if(Object.values(hash[key]).length ==3){
            res +=1;
        }
     }

     return res
};