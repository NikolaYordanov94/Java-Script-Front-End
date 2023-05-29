function evenAndOddSustraction(elements) {
    let sumOdd = 0;
    let sumEven = 0;

    for (const element of elements) {
        if (Number(element) % 2 == 0) {
            sumEven += Number(element);
        } else {
            sumOdd += Number(element);
        }
    }

    console.log(sumEven - sumOdd);
}

evenAndOddSustraction([1, 2, 3, 4, 5, 6]);
evenAndOddSustraction([3, 5, 7, 9]);