//Given a string, return a new string that has transformed based on the input:
//
//Change case of every character, ie. lower case to upper case, upper case to lower case.

//Reverse the order of words from the input.

//Note: You will have to handle multiple spaces, and leading/trailing spaces.

//For example:
//"Example Input" ==> "iNPUT eXAMPLE"
//You may assume the input only contain English alphabet and spaces.


//Psuedo: make an array, split str, reverse, join, then split again, map through it making changes to each letter, and join back into a string

function stringTransformer(str) {
    return str
    .split(' ')
    .reverse()
    .join(' ')
    .split('')
    .map(l => l === l.toUpperCase() ? l.toLowerCase() : l.toUpperCase())
    .join('')
}