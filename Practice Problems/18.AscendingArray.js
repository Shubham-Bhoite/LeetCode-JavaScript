// 18. Write a function that categorizes an array of numbers in ascending order :


function sortNumbersAscending(arr) {
    return arr.sort((a, b) => a - b);
}
const numbers = [3, 1, 4, 1, 5, 9, 2, 6, 5];
const sortedNumbers = sortNumbersAscending(numbers);
console.log(sortedNumbers); 

