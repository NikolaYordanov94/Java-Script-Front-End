function countStringOccurrences(string, searchedWord) {
    let text = string.split(" ");
    let count = 0;

    for (const word of text) {
        if (searchedWord === word) {
            count++;
        }
    }

    console.log(count);
}

countStringOccurrences('This is a word and it also is a sentence', 'is');