// 28. Get Unique Characters from a String in JavaScript :


function uniqueCharacters(str) {
    const uniqueChars = [];
    for (let i = 0; i < str.length; i++) {
        if (!uniqueChars.includes(str[i])) {
            uniqueChars.push(str[i]);
        }
    }
    return uniqueChars.join('');
}

console.log(uniqueCharacters("geeksforgeeks")); 