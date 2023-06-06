function wordsUppercase(text) {
    let arr = text.split(" ");
    let outputArr = [];

    for (const word of arr) {
        let upperCaseWord = word.toUpperCase();
        let lastIndexOfWord = upperCaseWord.charCodeAt(upperCaseWord.length - 1);
        if (lastIndexOfWord < 65 || lastIndexOfWord > 90) {
            upperCaseWord = upperCaseWord.slice(0, upperCaseWord.length - 1);
        }

        if (upperCaseWord.includes(".")) {
            upperCaseWord = upperCaseWord.replace(/\./g, ", ");
        }

        if (upperCaseWord.includes("/")) {
            upperCaseWord = upperCaseWord.replace(/\//g, ", ");
        }

        if (upperCaseWord.charCodeAt(0) === 34) {
            upperCaseWord = upperCaseWord.slice(1);
        }

        if (upperCaseWord.includes(":")) {
            upperCaseWord = upperCaseWord.replace(/\:/g, ", ");
        }

        if (upperCaseWord.includes(";")) {
            upperCaseWord = upperCaseWord.replace(/\;/g, ", ");
        }

        if (upperCaseWord.includes("#")) {
            upperCaseWord = upperCaseWord.replace(/\#/g, ", ");
        }

        if (upperCaseWord.includes("%")) {
            upperCaseWord = upperCaseWord.replace(/\%/g, ", ");
        }

        if (upperCaseWord.includes("&")) {
            upperCaseWord = upperCaseWord.replace(/\&/g, ", ");
        }


        outputArr.push(upperCaseWord);
    }
    console.log(outputArr.join(", "));
}

wordsUppercase('Hi, how are you?');

wordsUppercase('Functions in JS can be nested, i.e. hold other functions');