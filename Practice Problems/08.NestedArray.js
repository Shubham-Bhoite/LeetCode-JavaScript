// 8. Write a JavaScript function to find the largest element in the nested array :



function findLargestElement(arr) {
    let max = -Infinity;
    function helper(nestedArr) {
        for (let item of nestedArr) {
            if (typeof item === "number") {
                max = Math.max(max, item);
            } else if (Array.isArray(item)) {
                helper(item);
            }
        }
    }
    helper(arr);
    return max;
}
const nestedArray = [1, [2, 3, [4, 5]], 6, [7, 8]];
const largestElement = findLargestElement(nestedArray);
console.log("Largest element:", largestElement);
