// 10. Write a JavaScript function that returns the Fibonacci sequence to a specified number :


function fibonacci(n) {
    if (n <= 0) {
        return [];
    }
    if (n === 1) {
        return [0]; // Return [0] if n is 1
    }
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
        sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
}
const terms = 10;
const fibonacciSequence = fibonacci(terms);
console.log(fibonacciSequence);

