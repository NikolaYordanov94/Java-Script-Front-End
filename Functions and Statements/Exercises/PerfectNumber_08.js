function perfectNum(num) {
    let sum = 0;

    for (let index = 1; index <= num / 2; index++) {
        if (num % index === 0) {
            sum += index;
        }
    }

    if (sum === num) {
        console.log("We have a perfect number!");
    } else {
        console.log("It's not so perfect.");
    }
}

perfectNum(6);
perfectNum(28);
perfectNum(1236498);