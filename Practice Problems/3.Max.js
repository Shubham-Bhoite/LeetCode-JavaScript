// 3. Write a JavaScript function that finds the maximum number in an array :

function findMax(arr) {
    if (arr.length === 0) {
        return null; // Handle empty array
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
const numbers = [10, 5, 25, 8, 15];
const maxNumber = findMax(numbers);
console.log("The maximum number is:", maxNumber);

