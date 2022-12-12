//Your task is to remove all consecutive duplicate words from a string, leaving only first words entries. For example:
//
//"alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta"
//
//--> "alpha beta gamma delta alpha beta gamma delta"

//filter values that don't equal the next value

function removeDupeWords(str){
    //split string and filter where the word does not equal the word in the array before it, then join back together
    return str.split(" ").filter((w,i,a) => w !== a[i-1]).join(" ")
}