// 5. Write a JavaScript program to check whether the given number is prime :

function isPrime(number) {
    if (number <= 1) {
        return false; // Numbers less than or equal to 1 are not prime
    }
    for (let i = 2; i * i <= number; i++) {
        if (number % i === 0) {
            return false; // If divisible by any number between 2 and the square root of a number, it's not prime
        }
    }
    return true; // If the loop completes without finding a divisor, the number is prime
}
const num = 17;
const isPrimeResult = isPrime(num);
if (isPrimeResult) {
    console.log(num, "is a prime number.");
} else {
    console.log(num, "is not a prime number.");
}

