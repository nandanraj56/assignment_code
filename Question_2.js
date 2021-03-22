/*
2. Calculate the minimum positive number that is not a possible sum from a list of positive integers.
#Examples:
solve([1,2,8,7]) == 4 => we can get 1, 2, 3 (from 1+2), but we cannot get 4. 4 is the minimum number
not possible from the list.
solve([4,1,2,3,12]) == 11. We can get 1, 2, 3, 4, 4+1=5, 4+2=6,4+3=7,4+3+1=8,4+3+2=9,4+3+2+1=10.
But not 11.
solve([2,3,2,3,4,2,12,3]) == 1. We cannot get 1.
 */

//Solution:
const solve = (arr) => {

    let result = 1; // Initialize result 

    /* Traverse the array and increment result if arr[i] is 
     smaller than or equal to result */
    for (let i = 0; i < arr.length && arr[i] <= result; i++)
        result = result + arr[i];

    return result;

}
const result = solve([2,3,2,3,4,2,12,3].sort())
console.log(result)