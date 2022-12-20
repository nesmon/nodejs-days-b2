// 1- Create a function to additionat a number by is number
function imselfAddition(number) {
    return number + number;
}

// Call the function and print the result
console.log(imselfAddition(2));


// 2 - Create a function for return the big number of a array
function getBigNumber(numberArray) {
    // Using Math.max for return the big number of array
    return Math.max(...numberArray);
}

console.log(getBigNumber([17, 62, 53, 42, 35, 86, 37, 48, 59, 10]));


// 3 - Create a function take a string for remove every A, E, I, O, U
function removeVowel(string) {
    // Do a string replace for each vowel
    return string.replace(/[aeiou]/gi, "");
}

console.log(removeVowel("Hello world"));


// 4 - Create a function for return a array of string in alphabetical order
function getAlphabeticalOrder(stringArray) {
    // Do a sort for each string in array
    return stringArray.sort();
}

console.log(getAlphabeticalOrder(["Hello", "world", "I", "am", "a", "student"]));


// 5 - Create a function that take a number and return it in letter version from 0 to infinity
function getNumberLetter(number) {
    // Create a array of letter
    const letterArray = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine", "sixty", "sixty-one", "sixty-two", "sixty-three", "sixty-four", "sixty-five", "sixty-six", "sixty-seven", "sixty-eight", "sixty-nine", "seventy", "seventy-one", "seventy-two", "seventy-three", "seventy-four", "seventy-five", "seventy-six", "seventy-seven", "seventy-eight", "seventy-nine", "eighty", "eighty-one", "eighty-two", "eighty-three", "eighty-four", "eighty-five", "eighty-six", "eighty-seven", "eighty-eight", "eighty-nine", "ninety", "ninety-one", "ninety-two", "ninety-three", "ninety-four", "ninety-five", "ninety-six", "ninety-seven", "ninety-eight", "ninety-nine", "one hundred"];
    // Return the number in letter
    return letterArray[number];
}


console.log(getNumberLetter(100));


// 6 - 


// 7 - Create a function tae a array number for return in decreasing order
function getDecreasingOrder(numberArray) {
    // Do a sort for each number in array and revert it
    return numberArray.sort((a, b) => a - b);
}

console.log(getDecreasingOrder([17, 62, 53, 42, 35, 86, 37, 48, 59, 10]));


// 8 - Create a function take a string for return every A, E, I, O, U in uppercase
function getVowelUpperCase(string) {
    // Do a string replace for each vowel and convert in upper case by using a arrow function
    return string.replace(/[aeiou]/gi, (vowel) => vowel.toUpperCase());
}

console.log(getVowelUpperCase("Hello world"));


// 9 - Create a function that take a string and return number of vowel in
function getVowelCount(string) {
    // Do a string replace for each vowel and return the length of string
    string = string.replace(/[bcdfghjklmnpqrstvwxyz]/gi, "");
    // Remove space and retrn the final length
    return string.replace(" ", "").length;
}

console.log(getVowelCount("Hello world"));


// 10 - Create a function that take a string and return every consonant in uppercase
function getConsonantUpperCase(string) {
    // Do a string replace for each consonant and convert in upper case by using a arrow function
    return string.replace(/[bcdfghjklmnpqrstvwxyz]/gi, (consonant) => consonant.toUpperCase());
}

console.log(getConsonantUpperCase("Hello world"));