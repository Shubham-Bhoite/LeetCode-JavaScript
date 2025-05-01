// 7. Write a JavaScript program to change the string to title (first letter of every word should be in upper case) :

function capitalizeFirstLetterOfEachWord(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(word => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    });
    return capitalizedWords.join(" ");
}
const inputString = "hello world this is a sample string";
const capitalizedString = capitalizeFirstLetterOfEachWord(inputString);
console.log("Capitalized string:", capitalizedString);



