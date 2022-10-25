//Map (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
//Reduce (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
//Number(https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number)


//Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

//Return your answer as a number.

//assert.strictEqual(sumMix([9, 3, '7', '3']), 22);
//assert.strictEqual(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
//assert.strictEqual(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41); 

//Hint: reduce the array adding each value to get a sum and make sure the current value is treated as a Number by using Number() 

//_______________________________________
// array of integers as strings & numbers - all technically nums, no special characters? / no funny biz 
// returning the sum of the array as if all were integers no strings attached

//sumMix([9, 3, '7', '3'], 22)



function sumMix(arr){
//loop (map) array to convert all to Number
//sum each e 
return arr.map(e => Number(e)).reduce((a,c) => a + c, 0)
}

console.log(sumMix([9, 3, '7', '3'], 22))