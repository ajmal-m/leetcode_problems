/**
 * 
 * 
 * You are given a 0-indexed integer array nums of size 3 which can form the sides of a triangle.

A triangle is called equilateral if it has all sides of equal length.
A triangle is called isosceles if it has exactly two sides of equal length.
A triangle is called scalene if all its sides are of different lengths.
Return a string representing the type of triangle that can be formed or "none" if it cannot form a triangle
 * 
 */


/**
 * @param {number[]} nums
 * @return {string}
 */
var triangleType = function(nums) {

    if([...new Set(nums)].length == 1){
    return "equilateral"
}

let canForm = true;
for(let i=0; i< 2; i++){
    for(let j=i+1; j< 3; j++){
        if(nums[i] + nums[j] <= nums[3-i-j]){
            canForm = false;
            break
        }
    }
}

if(!canForm){
    return "none"
}


if([...new Set(nums)].length == 2){
    return "isosceles"
}
return "scalene"

};