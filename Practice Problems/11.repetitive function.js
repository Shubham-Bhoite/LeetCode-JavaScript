// 11. Write a repetitive function to find a factorial of a given number : 


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}
const number = 5;
const result = factorial(number);
console.log("Factorial of " + number + " is " + result);

