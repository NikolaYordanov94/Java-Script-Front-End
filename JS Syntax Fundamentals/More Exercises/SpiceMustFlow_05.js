function spiceMustFlow(startingYield) {

    let countDaysPast = 0;
    let totalAmountOfSpices = 0;

    while (startingYield >= 100) {
        totalAmountOfSpices += (startingYield - 26);
        startingYield -= 10;
        countDaysPast++;
    }

    console.log(countDaysPast);
    console.log(totalAmountOfSpices - 26);
}

spiceMustFlow(111);
spiceMustFlow(450);