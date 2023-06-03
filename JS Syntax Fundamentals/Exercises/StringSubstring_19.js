function stringSubstring(searchedWord, text) {
    let lowerCaseSearchedWord = searchedWord.toLowerCase()
    text = text.toLowerCase();
    let words = text.split(" ");
    let isFound = false;

    for (const word of words) {
        if(word === lowerCaseSearchedWord){
            console.log(searchedWord);
            isFound = true;
            break;
        }
        if(isFound){
            break;
        }
    }
    if(!isFound){
        console.log(`${searchedWord} not found!`);
    }
}

stringSubstring('javascript',
    'JavaScript is the best programming language'
);

stringSubstring('python',
    'JavaScript is the best programming language'
);