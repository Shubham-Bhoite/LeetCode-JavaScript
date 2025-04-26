// 2. Write a JavaScript program to reverse the given string :

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
const inputString = "hello world";
const reversedString = reverseString(inputString);
console.log("Reversed string:", reversedString); 
