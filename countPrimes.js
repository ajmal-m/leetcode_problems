/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    if(n <=2){
        return 0
    }
    let count = 0
    let arr = new Array(n).fill(true)
    arr[0] = false;
    arr[1] = false;
    for(let i=2; i*i < n; i++){
        if(arr[i]){
            for(let p=i*i; p < n; p+=i){
                arr[p] = false
            }
        }
    }
    for(let item of arr){
        if(item){
            count++
        }
    }
    return count
};

/*
Given an integer n, return the number of prime numbers that are strictly less than n.
*/