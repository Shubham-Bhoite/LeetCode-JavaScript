// 20. Write a function that takes an array of numbers as input and returns a new array with unique elements only. :


function findLargestAndSmallest(arr) {
    let largest = arr[0];
    let smallest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        } else if (arr[i] < smallest) {
            smallest = arr[i];
        }
    }
    return { largest, smallest };
}
const numbers = [10, 5, 25, 8, 15];
const result = findLargestAndSmallest(numbers);
console.log("Largest number:", result.largest);
console.log("Smallest number:", result.smallest);

