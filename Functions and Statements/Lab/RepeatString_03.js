function repeatString(string, count) {
    let outputArr = [];

    for (let i = 0; i < count; i++) {
        outputArr.push(string);
    }

    console.log(outputArr.join(""));
}

repeatString("abc", 3);