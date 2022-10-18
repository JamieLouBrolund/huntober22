//? charAt
//* what it does: 
//takes in an index and string and returns a specific character at that location

//* how it works: 
// see if the specified index passed into the method matches any index avaiable within the string, then returns the character at that index, if available

//* time complexity:
// 0(1)

//* examples:
//let text1 = "Sample Text"
//console.log(text1.charAt(0))
//console.log(text1.charAt(text1.length-1))
//console.log(text1.charAt("0"))
//console.log(text1.charAt("test"))
//let test1 = ''
//console.log(test1.charAt(''))

//? charCodeAt
//* what it does:
//takes in an index value and a string , returns an integer for the UTF-16 value located at that index 

//* how it works:
// see if the specified index passed into the method matches any index avaiable within the string, then returns the UTF-16 integer, if available. If the indeger value is larger than 655536, then charCodeAt(i+1) should be used to get the other half of the value pair. 

//* time complexity: 0(1) ?

//* examples:
//let text2 = "Sample Text"
//console.log(1, text2.charCodeAt(0))
//console.log(2, text2.charCodeAt(text2.length-1))
//console.log(3, text2.charCodeAt(1))
//console.log(4, text2.charCodeAt(15))

//? Concat

//* what it does: 
//takes strings and joins them together into a new string

//* how it works:
// creates a new array, array will first be populated by the elements in the objects, then for each argument, its value gets concatenated into the array 

//* time complexity: 0(1)

//* examples:
//let array1 = ["a", "b", "c"]
//let array2 = ["d", "e", "f"]
//console.log(array1.concat(array2))


//? includes

//*what it does:
//determines whether an array includes a certain value among its entries, returning true or false as appropriate.

//*how it works:
//includes(searchElement)
//includes(searchElement, fromIndex)
// takes in string and starts by looking at the position at which to begin searching for the element, returns true or false if that element exists

//*time complexity: 0(1)

//examples:
//let array1 = [1,2,3]
//console.log(array1.includes(2)) //true

//? indexOf

//*what it does:
//returns the first index at which a given element can be found in the array, or -1 if it is not present.

//*how it works:
//indexOf(searchElement, fromIndex)
//compares searchElement to elements of the Array using strict equality (the same method used by the === or triple-equals operator).

//*time complexity: 0(1)

//*examples:
//const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
//console.log(beasts.indexOf('bison'));
//console.log(beasts.indexOf('bison', 2)); //start from index 2
//console.log(beasts.indexOf('giraffe'));

//? match

//* what it does: 
//retrieves the result of matching a string against a regular expression.

//* how it works:
//match(regexp)
//it simply calls the Symbol.match method of the argument with the string as the first parameter.

//* time complexity:

//* examples:
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.'
//const regex = /[A-Z]/g;
//const found = paragraph.match(regex);
//console.log(found);

//const str1 = "NaN means not a number. Infinity contains -Infinity and +Infinity in JavaScript.";
//const str2 = "My grandfather is 65 years old and My grandmother is 63 years old.";
//const str3 = "The contract was declared null and void.";
//str1.match("number");   // "number" is a string. returns ["number"]
//str1.match(NaN);        // the type of NaN is the number. returns ["NaN"]
//str1.match(Infinity);   // the type of Infinity is the number. returns ["Infinity"]
//str1.match(+Infinity);  // returns ["Infinity"]
//str1.match(-Infinity);  // returns ["-Infinity"]
//str2.match(65);         // returns ["65"]
//str2.match(+65);        // A number with a positive sign. returns ["65"]
//str3.match(null);       // returns ["null"]


//? repeat

//* what it does: 
//constructs and returns a new string which contains the specified number of copies of the string on which it was called, concatenated together.


//* how it works:
//repeat(count)
// takes in an integer between 0 and +infinity, idicating the number of times to repeat the string, returns a new string ocntaining the specified number of copies of the given string

//* time complexity:

//* examples:
//const chorus = 'Because I\'m happy. ';
//console.log(`Chorus lyrics for "Happy": ${chorus.repeat(27)}`);

//? replace

//* what it does: 
// returns a new string with one, some, or all matches of a pattern replaced by a replacement. The pattern can be a string or a RegExp, and the replacement can be a string or a function called for each match. If pattern is a string, only the first occurrence will be replaced. The original string is left unchanged.

//* how it works:
//replace(pattern, replacement)
//does not mutate the string value it's called on. It returns a new string. A string pattern will only be replaced once. To perform a global search and replace, use a regular expression with the g flag, or use replaceAll() instead.

//* time complexity:

//* examples:
//const p = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
//
//console.log(p.replace('dog', 'monkey'));
// expected output: "The quick brown fox jumps over the lazy monkey. If the dog reacted, was it really lazy?"
//const regex = /Dog/i;
//console.log(p.replace(regex, 'ferret'));

//? search

//* what it does: 
//executes a search for a match between a regular expression and this String object.

//* how it works:
//calls the Symbol.search method of the argument with the string as the first parameter. The g flag of regexp has no effect on the search() result, and the search always happens as if the regex's lastIndex is 0.

//* time complexity:

//* examples:
//const paragraph1 = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?'
// any character that is not a word character or whitespace
//const regex = /[^\w\s]/g;
//console.log(paragraph1.search(regex));
// expected output: 43
//console.log(paragraph1[paragraph1.search(regex)]);
// expected output: "."
//const str = "hey JudE";
//const re = /[A-Z]/;
//const reDot = /[.]/;
//console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
//console.log(str.search(reDot)); // returns -1 cannot find '.' dot punctuation


//? slice

//* what it does: 
//returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.

//* how it works:
//slice()
//slice(start)
//slice(start, end)
//begin at the zero index to start extraction, ends at teh index of the first element

//* time complexity:

//* examples:
//const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
//console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

//? split

//* what it does: 
//takes a pattern and divides a String into an ordered list of substrings by searching for the pattern, puts these substrings into an array, and returns the array.

//* how it works:
//split(separator, limit)
//If separator is a non-empty string, the target string is split by all matches of the separator without including separator in the results.

//* time complexity:

//* examples:
//const str = 'The quick brown fox jumps over the lazy dog.';
//const words = str.split(' ');
//console.log(words[3]);

//? substr (deprecated)

//* what it does: 
//returns a portion of the string, starting at the specified index and extending for a given number of characters afterwards.

//* how it works:
// starts at the index of the 1st character to include in the returned substring. measures the number of characters to extract, returns a new string containing the specified part of the given string

//* time complexity:

//* examples:
//const str = 'Mozilla';
//console.log(str.substr(1, 2));
// expected output: "oz"
//console.log(str.substr(2));
// expected output: "zilla"


//? toLowerCase

//* what it does: 
//returns the calling string value converted to lower case.

//* how it works:
//returns a new string representing the calling string convereted to lower case

//* time complexity:

//* examples:
//const sentence = 'The quick brown fox jumps over the lazy dog.';
//console.log(sentence.toLowerCase());

//? toUpperCase

//* what it does: 
//eturns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

//* how it works:
//returns a new string representing the calling string converted to upper case

//* time complexity:

//* examples:
//const sentence = 'The quick brown fox jumps over the lazy dog.';
//console.log(sentence.toUpperCase());

//? trim

//* what it does: 
//removes whitespace from both ends of a string and returns a new string, without modifying the original string.

//* how it works:
// returns a new string repping str stripped of whitespace from both its beginning and its end. If neither the beginning or end of str has any whitespace, a new string is still returned (essentially a copy of str), with no exception being thrown. To return a new string with whitespace trimmed from just one end, use trimStart() or trimEnd().

//* time complexity:

//* examples:
//const orig = '   foo  ';
//console.log(orig.trim()); // 'foo'