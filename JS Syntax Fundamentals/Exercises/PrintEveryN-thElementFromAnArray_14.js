function nthElementFromArray(arr, step) {
    let outputArr = [];
    outputArr.push(arr[0]);

    for (let index = 0; index < arr.length; index++) {
        if (index % step === 0 && index != 0) {
            outputArr.push(arr[index]);
        }

    }
    return outputArr;
}

nthElementFromArray(['5',
    '20',
    '31',
    '4',
    '20'],
    2
);

nthElementFromArray(['dsa',
    'asd',
    'test',
    'tset'],
    2
);