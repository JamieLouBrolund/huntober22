//Filter(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
//Slice(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
//
//
//DON'T WORRY ABOUT COMPLEXITY - we are using this one to practice our array methods!
//
//Given an array of digital numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.
//
//For example:
//
//([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
//([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
//([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]
//
//
//From: https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/solutions/javascript

//Filter the even numbers and slice the end using the -n syntax

//__________
//array of digital nums
//return NEW array of length the number containing the last even nums in the same order

function evenNums(arr, num){
    let evens = arr.filter(item => item % 2 === 0) //get the evens from array
    return evens.slice(evens.length - num) //get last even numbers in array by - the negative nums in array
}

console.log(evenNums(([1, 2, 3, 4, 5, 6, 7, 8, 9], 3)))


