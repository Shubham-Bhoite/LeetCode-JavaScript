// 6. Write a JavaScript function that uses an array of numbers and only gives a new array with even numbers :


function evenNumbers(numbers) {
    const evenArray = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] % 2 === 0) {
            evenArray.push(numbers[i]);
        }
    }
    return evenArray;
}
const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
const evenNumbersArray = evenNumbers(numbers);
console.log("Even numbers:", evenNumbersArray);

