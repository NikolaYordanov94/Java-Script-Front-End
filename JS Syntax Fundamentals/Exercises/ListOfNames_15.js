function listOfNames(arr) {
    let arrSorted = arr.sort((aName, bName) => aName.localeCompare(bName));

    for (let index = 0; index < arrSorted.length; index++) {
        console.log(`${index + 1}.${arrSorted[index]}`)
    }
}


listOfNames(["John", "Bob", "Christina", "Ema"]);

