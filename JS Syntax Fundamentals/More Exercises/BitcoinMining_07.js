function bitcoinMining(goldArr) {
    let totalGoldMined = 0;
    let dayOfFirstBitcoin = 0;

    for (let dayIndex = 0; dayIndex < goldArr.length; dayIndex++) {
        let currentDayGold = goldArr[dayIndex];

        if ((dayIndex + 1) % 3 === 0) {
            currentDayGold *= 0.7;
        }

        totalGoldMined += currentDayGold;

        if (totalGoldMined * 67.51 >= 11949.16 && dayOfFirstBitcoin === 0) {
            dayOfFirstBitcoin = dayIndex + 1;
        }
    }
    let totalMoneyWon = totalGoldMined * 67.51;
    let totalBitcoinsBought = Math.floor(totalMoneyWon / 11949.16);
    let moneyLeft = totalMoneyWon - (totalBitcoinsBought * 11949.16);

    if (dayOfFirstBitcoin != 0) {
        console.log(`Bought bitcoins: ${totalBitcoinsBought}`);
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
        console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
    } else {
        console.log(`Bought bitcoins: ${totalBitcoinsBought}`);
        console.log(`Left money: ${moneyLeft.toFixed(2)} lv.`);
    }
}

bitcoinMining([50, 100]);
bitcoinMining([3124.15, 504.212, 2511.124]);