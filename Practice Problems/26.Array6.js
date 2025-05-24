// 26. Find the maximum difference between two numbers in an array in JavaScript :


function maxDifference(arr) {
    let min = arr[0]
    let maxDiff = 0;

    for (let i = 1; i < arr.length; i++) {
        const diff = arr[i] - min;
        maxDiff = Math.max(maxDiff, diff);
        min = Math.min(min, arr[i]);
    }
    return maxDiff;
}

console.log(maxDifference([1, 2, 90, 10, 110]));
