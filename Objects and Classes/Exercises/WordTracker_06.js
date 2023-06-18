function wordTracker(input) {
    let searchedWords = input[0].split(" ");
    let counter = 0;
    let wordsCounted = [];

    for (const word of searchedWords) {
        for (let index = 1; index < input.length; index++) {
            if (word === input[index]) {
                counter++;
            }
        }
        let wordObj = { word, counter };
        wordsCounted.push(wordObj);
        counter = 0;
    }

    wordsCounted.sort((a, b) => b.counter - a.counter);

    for (const word of wordsCounted) {
        console.log(`${word.word} - ${word.counter}`);
    }
}


wordTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);