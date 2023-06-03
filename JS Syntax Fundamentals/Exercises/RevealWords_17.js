function revealWords(stringWords, stringText) {
    let arr = stringWords.split(", ");
    let searchedWord = "";

    for (let index = 0; index < arr.length; index++) {
        searchedWord = arr[index].replace(arr[index], "*".repeat(arr[index].length));

        stringText = stringText.replace(searchedWord, arr[index]);
    }
    console.log(stringText);
}

revealWords('great',
    'softuni is ***** place for learning new programming languages'
);

revealWords('great, learning',
    'softuni is ***** place for ******** new programming languages'
);