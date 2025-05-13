// 16. Write a function that removes the duplicates from an array :


function removeDuplicates(arr) {
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet);
}
const numbers = [1, 2, 3, 2, 4, 5, 1, 4];
const uniqueNumbers = removeDuplicates(numbers);
console.log("Unique numbers:", uniqueNumbers);

