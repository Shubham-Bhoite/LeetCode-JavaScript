// 22. Find the Longest Word in a String in JavaScript :


function longestWord(str) {
    
    const words = str.split(' ');
    let longest = '';

    for (let word of words) {
        if (word.length > longest.length) {
            longest = word;
        }
    }
    return longest;
}

console.log(longestWord('Shubham is great'));
