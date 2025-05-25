// 27. Count Vowels in a String in JavaScript :


function countVowels(str) {
    let count = 0;
    // Include both lowercase and uppercase vowels
    const vowels = 'aeiouAEIOU'; 
    for (let i = 0; i < str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }

    return count;
}

console.log(countVowels("hello bro"));
