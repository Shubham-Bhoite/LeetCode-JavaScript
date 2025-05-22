// 25. Check if Two Strings are Anagrams or not in JavaScript :


function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) {
        return false; 
    }

    let count1 = {};
    let count2 = {};

    // Count frequency of each character in str1
    for (let i = 0; i < str1.length; i++) {
        let char = str1[i];
        count1[char] = (count1[char] || 0) + 1;
    }

    // Count frequency of each character in str2
    for (let i = 0; i < str2.length; i++) {
        let char = str2[i];
        count2[char] = (count2[char] || 0) + 1;
    }

    // Compare the two frequency objects
    for (let char in count1) {
        if (count1[char] !== count2[char]) {
            return false; 
        }
    }

    return true; 
}
console.log(areAnagrams("listen", "silent"));
