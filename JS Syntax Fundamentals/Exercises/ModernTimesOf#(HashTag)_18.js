function modernTImesOfHashTag(text) {
    let arr = text.split(" ");
    let isSpecialWord = true;

    for (let index = 0; index < arr.length; index++) {
        let currentWord = arr[index];
        if (currentWord.startsWith("#") && currentWord.length > 1) {
            let checkWord = currentWord.toLowerCase();
            for (let i = 1; i < currentWord.length; i++) {
                if (checkWord.charCodeAt(i) < 97 || checkWord.charCodeAt(i) > 123) {
                    isSpecialWord = false;
                    break;
                }
            }
        } else {
            isSpecialWord = false;
        }

        if (isSpecialWord) {
            console.log(currentWord.slice(1));
        }
        isSpecialWord = true;
    }
}

modernTImesOfHashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');