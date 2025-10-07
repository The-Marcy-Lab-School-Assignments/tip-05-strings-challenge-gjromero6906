/*
Write a function named  capitalizeWords that takes a string (sentence) as input and returns 
a new string where the first letter of each word is capitalized.
*/
const capitalizeWords = (sentence) => {
    //write your solution here
    let newSentence = '';
    let sentenceLenght = sentence.length;
    //sentence[i] same as .charterAt(i),string is an array of characters
    for (let i = 0; i < sentenceLenght; i++) {
        if (i === 0) {
            newSentence += sentence[i].toUpperCase();
        } else if (sentence[i] === ' ') {
            newSentence += ` ${sentence[i + 1].toUpperCase()}`;
            i++;
        } else {
            newSentence += sentence[i];
        }
    }
    return newSentence;
}

console.log(capitalizeWords("hello world from javascript"));
// → "Hello World From Javascript"

console.log(capitalizeWords("javaScript"));
// → "JavaScript"
