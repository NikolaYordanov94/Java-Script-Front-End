function charactersInRange(char1, char2) {

    let startChar = Math.min(char1.charCodeAt(), char2.charCodeAt());
    let endChar = Math.max(char1.charCodeAt(), char2.charCodeAt());
    printCharsInRange(startChar, endChar);


    function printCharsInRange(start, end) {
        let output = [];

        for (let asciiCode = start + 1; asciiCode < end; asciiCode++) {
            let currentElement = String.fromCharCode(asciiCode);
            output.push(currentElement);
        }

        console.log(output.join(" "));
    }
}

charactersInRange('a',
    'd'
);

charactersInRange('#',
    ':'
);