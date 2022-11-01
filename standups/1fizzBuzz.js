//Given a number as an input, print out every integer from 1 to that number. However, when the integer is divisible by 3, print out “Fizz”; when it’s divisible by 5, print out “Buzz”; when it’s divisible by both 3 and 5, print out “Fizz Buzz”.

//Hint: Loop with conditionals that use modulus

//function fizzBuzz (number){
//    for(let i = 1; i <= number; i ++){
        //check if the conditions for both Fizz and Buzz are met, i.e. multiples of 15 (3 * 5)
//        if( i % 15 === 0 ){
//            console.log( "fizzBuzz")
        // if not then check for multiples of 3
//        }else if( i % 3 === 0 ){
//            console.log( "Fizz")
        //if not then check for multiples of 5    
//        }else if(i % 5 === 0){
//            console.log( "Buzz")
       //After any condition is met, the correct result is printed, the loop begins again and i is incremented by one (i++). This process will continue, in this case, until i is greater than or equal to the given number       
//        }
//    }
//}
//
//fizzBuzz("50")

const fizzBuzz = (value) => {
    //loop through value
    for (let i =0; i < value; i++){
        //create conditional to check for fizz, buzz, fizzbuzz, else print the value
        if( i % 15 === 0){
            console.log("fizz buzz")
        }else if( i % 5 === 0){
            console.log("buzz")
        }else if( i % 3 === 0){
            console.log("fizz")
        }else{
            console.log(i)
        }
    }
}
console.log(fizzBuzz(64))


//leons solution
function fizzBuzz(num){
  //for loop from 1 to num 
  for(let i = 1; i <= num; i++){
    //conditional 
    //if num % 3 && num % 5 === 0 -> fizzBuzz
    if(i % 3 === 0 && i % 5 === 0){
      console.log('fizzBuzz')
    }else if(i % 3 === 0){
      console.log('fizz')
    }else if( i % 5 === 0 ){
      console.log('buzz')
    }else{
      console.log(i)
    }
    //if num % 3 === 0 -> fizz
    //if num % 5 === 0 -> buzz
    //log the num
  }
}

fizzBuzz(5) //1, 2, fizz, 4, buzz
fizzBuzz(9) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz
fizzBuzz(15) //1, 2, fizz, 4, buzz, fizz, 7, 8, fizz, buzz, 11, fizz, 13, 14, fizzbuzz