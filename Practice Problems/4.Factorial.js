// 4. Write a JavaScript program that calculates the factorial of a number :

function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const number = 5;
const result = factorial(number);
console.log("Factorial of", number, "is", result);

