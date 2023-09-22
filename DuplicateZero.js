/*  
Given a fixed-length integer array arr, duplicate each occurrence of zero, shifting the remaining elements to the right.
Note that elements beyond the length of the original array are not written. 
Do the above modifications to the input array 
in place and do not return anything.
*/

var duplicateZeros = function(arr) {
    let i=0;
    let n = arr.length;
    while(i < n){
        if(arr[i] === 0){
            for(let j=n-1; i< j; j--){
                arr[j] = arr[j-1]
            }
            if(i+1 < n){
                arr[i+1] =0
            }
            i+=2
        }else{
            i++
        }
    }
};