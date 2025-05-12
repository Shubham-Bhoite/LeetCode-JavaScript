// 15. Write a function that finds the factorial of a given number :


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1; 
    } else {
        return n * factorial(n - 1); 
    }
}
const number = 9; 
const result = factorial(number); 
console.log("Factorial of " + number + " is " + result);    

