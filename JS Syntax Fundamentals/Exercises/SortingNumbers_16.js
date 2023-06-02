function listOfNames(arr) {
    let outputArr = [];
    let currentMax = 0;
    let currentMin = 0;

    while (arr.length > 0) {

        if (arr.length > 1) {
            currentMax = Math.max(...arr);
            currentMin = Math.min(...arr);

            outputArr.push(currentMin);
            outputArr.push(currentMax);

            arr.splice(arr.indexOf(currentMax), 1);
            arr.splice(arr.indexOf(currentMin), 1);

        } else {
            let lastElement = arr.shift();
            outputArr.push(lastElement);
        }
    }

    return outputArr;
}

listOfNames([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);