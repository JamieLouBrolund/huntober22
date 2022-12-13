//You will be given an array of strings and your task is to remove all consecutive duplicate letters from each string in the array.
//
//For example:
//
//dup(["abracadabra","allottee","assessee"]) = ["abracadabra","alote","asese"].
//dup(["kelless","keenness"]) = ["keles","kenes"].
//Strings will be lowercase only, no spaces 
//
//dup(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]),['codewars','picaniny','hubububo'])
//dup(["abracadabra","allottee","assessee"]),['abracadabra','alote','asese'])
//dup(["kelless","keenness"]), ['keles','kenes'])
//
//map through the arrays, each return in the map should be the string split and filtering for each letter that does not equal the one before it then join them up - we had this pattern before!

function removeDupes(arr){
    //map w => split, map, filter, join back
    return arr.map(
        word => word.split('').filter((l,i,a) => l != a[i-1]).join('')
    )
}

console.log(removeDupes(["ccooddddddewwwaaaaarrrrsssss","piccaninny","hubbubbubboo"]), "['codewars','picaniny','hubububo']")
console.log(removeDupes(["abracadabra","allottee","assessee"]),"['abracadabra','alote','asese']")
console.log(removeDupes(["kelless","keenness"]),"['keles','kenes']")