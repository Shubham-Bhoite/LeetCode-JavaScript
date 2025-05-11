// 9. Write a JavaScript program to check whether the given string is a palindrome. :


function isPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
}
const inputString = "racecar";
const isPalindromeResult = isPalindrome(inputString);
if (isPalindromeResult) {
    console.log(inputString, "is a palindrome.");
} else {
    console.log(inputString, "is not a palindrome.");
}        
