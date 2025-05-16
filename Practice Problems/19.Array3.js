// 19. Write a function to find the largest and smallest numbers in the array from the set of a given array of numbers :


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

