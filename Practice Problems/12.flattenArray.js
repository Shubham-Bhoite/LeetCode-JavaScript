// 12. Develop a single-level array by functioning it into a flat nested array :


function flattenArray(arr) {
    const flattened = [];
    function flattenHelper(nestedArr) {
        for (let item of nestedArr) {
            if (Array.isArray(item)) {
                flattenHelper(item); // Recursively flatten the nested array
            } else {
                flattened.push(item); // Push non-array items into the flattened array
            }
        }
    }
    flattenHelper(arr);
    return flattened;
}
const nestedArray = [1, [2, 3], 4, [5, 6, [7, 8]]];
const flattenedArray = flattenArray(nestedArray);
console.log("Flattened array:", flattenedArray);
