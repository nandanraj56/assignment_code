/*
1. You are given a list of items (characters and/or integers). Find if an item reoccurs after a break of its
sequence. In other words: are there any items that reoccur in the list, but separated by one or more
different items?
#Examples:
solve([0, 0, 0, 0, 0, 0, 1, 2, 3, 3, 3, 4, 0, 0]) == 0
solve([0, 1, 'a', 2, ‘a]) == ‘a’
solve([0, 0, 1, 1, 2, 2]) == null
*/

//Solution:
const solve = (arr) => {    //Implementing hash set
    let hash = {}

    const checkValue = value => hash[value] === true

    //Checking for solution
    for (let i = 0; i < arr.length; i++) {

        if (checkValue(arr[i]) === false) {
            hash[arr[i]] = true
        } else if (!(arr[i - 1] === arr[i])) {
            return arr[i]
        }

    }
    return null

}
const result = solve([0, 0, 1, 1, 2, 2])
console.log(result)