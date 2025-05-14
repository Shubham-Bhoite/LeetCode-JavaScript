// 17. Write a function that counts the occurrences of each character in the given string :



function countCharacterOccurrences(str) {
    const charCount = {};
    for (let char of str) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    return charCount;
}
const inputString = "hello world";
const characterCounts = countCharacterOccurrences(inputString);
console.log("Character counts:", characterCounts);
