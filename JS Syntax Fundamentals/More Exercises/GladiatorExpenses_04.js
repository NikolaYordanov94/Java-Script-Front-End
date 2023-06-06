function gladiatorExpenses(loses, helmetPrice, swordPrice, shieldPrice, armorPrice) {
    let totalPriceHelmets = helmetPrice * Math.floor(loses / 2);
    let totalSwordPrice = swordPrice * Math.floor(loses / 3);
    let totalShieldPrice = shieldPrice * Math.floor(loses / 6);
    let totalArmorPrice = armorPrice * Math.floor(Math.floor(loses / 6) / 2);

    let totalEndPrice = totalPriceHelmets + totalSwordPrice + totalShieldPrice + totalArmorPrice;
    1
    console.log(`Gladiator expenses: ${totalEndPrice.toFixed(2)} aureus`);
}

gladiatorExpenses(7,
    2,
    3,
    4,
    5
);

gladiatorExpenses(23,
    12.50,
    21.50,
    40,
    200
);