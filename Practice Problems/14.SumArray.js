// 14. Write a program that finds the sum of all the numbers in an array :


function sumOfNumbers(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}
const numbers = [1, 2, 3, 4, 5];
const result = sumOfNumbers(numbers);
console.log("The sum of the numbers is:", result);

