function oddOccurances(inputStr) {
    inputStr = inputStr.toLowerCase();
    let inputArr = inputStr.split(" ");
    let counter = 0;
    let oddWordsArr = [];

    for (const word of inputArr) {
        for (let index = 0; index < inputArr.length; index++) {
            if (word === inputArr[index]) {
                counter++;
            }
        }
        let wordObj = { word, counter };
        let isExisting = oddWordsArr.find((obj) => obj.word === word);

        if (counter % 2 != 0 && !isExisting) {
            oddWordsArr.push(wordObj);
        }
        counter = 0;
    }

    let output = [];
    for (const element of oddWordsArr) {
        output.push(element.word);
    }
    console.log(output.join(" "));
}


oddOccurances('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');

oddOccurances('Cake IS SWEET is Soft CAKE sweet Food');