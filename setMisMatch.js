var findErrorNums = function(nums) {
   let dupNum = [...nums];
   let hash = {};
   let common;
   for(let i=0; i< dupNum.length; i++){
       if(dupNum[i] in hash){
           common = dupNum[i]
       }else{
           hash[dupNum[i]] = true
       }
   }
   let missElem;
   for(let i=1; i<=nums.length; i++){
       if(!(i in hash)){
           missElem = i;
           break;
       }
   }
   return [common, missElem]
}; 

/* 
You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

You are given an integer array nums representing the data status of this set after the error.

Find the number that occurs twice and the number that is missing and return them in the form of an array.
*/