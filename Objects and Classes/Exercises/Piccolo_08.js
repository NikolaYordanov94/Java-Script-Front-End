function piccolo(input) {
    let carNumberSet = new Set();

    for (const car of input) {
        let carArr = car.split(", ");
        let command = carArr[0];
        let carNumber = carArr[1];

        switch (command) {
            case "IN":
                carNumberSet.add(carNumber);
                break;
            case "OUT":
                carNumberSet.delete(carNumber);
                break;
        }
    }

    if (carNumberSet.size === 0) {
        console.log("Parking Lot is Empty");
    } else {
        let sortedCarNumberSet = [...carNumberSet.keys()]
            .sort((carNumA, carNumB) => carNumA.localeCompare(carNumB));

        for (const carNumber of sortedCarNumberSet) {
            console.log(carNumber);
        }
    }
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA']
);