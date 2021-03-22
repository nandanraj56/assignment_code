/*
3. Given two words, how many minimum characters have to be removed from them to make them
anagrams & what is the matching anagram?
Note : A word is an anagram of another word if they have the same letters.
#Examples:
solve("willowpump","urowl") == [7, "lowu"]
First word : "willowpump" (6 letters removed)
Second word : "urowl" (1 letters removed)
Result : [7, "lowu"]
solve("xy","yab") == [3, "y"]
First word : "xy" (1 letter removed)
Second word : "yab" (2 letters removed)
Result : [3, "y"]
solve("hello","") == [5, ""]
First word : "hello" (5 letter removed)
Second word : "" (0 letter removed)
Result : [5, ""]

solve("merry","rrme") == [1, "merr"]
First word : "merry" (1 letters removed)
Second word : "rrme" (0 letters removed)
Result : [1, "merr"]
solve("not","free") == [7, ""]
First word : "not" (3 letters removed)
Second word : "free" (4 letters removed)
Result : [7, ""]
*/

//Solution
const solve = (str1, str2) => {

    let hash = {}
    const checkValue = value => {
        return hash[value]
    }

    //Putting one str in hash
    for (let i = 0; i < str1.length; i++) {
        if (hash[str1[i]] == null) {
            hash[str1[i]] = 1
            continue
        }
        hash[str1[i]] = hash[str1[i]] + 1

    }

    //Checking 2nd str is present or not
    let result = ""
    for (let i = 0; i < str2.length; i++) {
        if (checkValue(str2[i]) > 0) {
            result += str2[i]
            hash[str2[i]] = hash[str2[i]] - 1
        }
    }
    let removed = str1.length - result.length + str2.length - result.length
    return [removed, result]

}
const result = solve("not", "free")
console.log(result)

