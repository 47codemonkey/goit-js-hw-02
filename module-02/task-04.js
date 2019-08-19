'use strict'

const findLongestWord = string => {
    let longestWord;
    let longestWordLength = 0;
    const words = string.split(" ");

    for (let i = 0; i < words.length; i++) {
        if (words[i].length > longestWordLength) {
            longestWordLength = words[i].length;
            longestWord = words[i];
        }
    }
    return longestWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
console.log(findLongestWord('Google do a roll'));
console.log(findLongestWord('May the force be with you'));