/*  

var findNumbers = function(nums) {
    let count = 0;
    for(let number of nums){
        let numLen = 0;
        while(number != 0){
            numLen ++
            number = parseInt(number/ 10)
        }
        if(numLen %2 ===0){
            count ++
        }
    }
    return count
};*/

var findNumbers = function (nums) {
    let count = 0;
    for (let number of nums) {
        let numLen = 0;
        while (number != 0) {
            numLen++
            number = parseInt(number / 10)
        }
        if (numLen % 2 === 0) {
            count++
        }
    }
    return count
};