//Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
//Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
//More Array Methods (https://javascript.info/array-methods)
//Array Methods Complexity (https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg)
//

//It's the academic year's end, fateful moment of your school report. The averages must be calculated. All the students come to you and entreat you to calculate their average for them. Easy ! You just need to write a script.
//
//Return the average of the given array rounded down to its nearest integer.
//
//The array will never be empty.
//
//getAverage([2,2,2,2]),2)
//getAverage([1,2,3,4,5,]),3);
//getAverage([1,1,1,1,1,1,1,2]),1)

//From: https://www.codewars.com/kata/563e320cee5dddcf77000158/javascript
//
//Hint: Reduce the sum and divide by the length to get the average and then round down

function getAverage (arr) {
    return Math.floor( arr.reduce((a,c) => a + c) / arr.length )
}