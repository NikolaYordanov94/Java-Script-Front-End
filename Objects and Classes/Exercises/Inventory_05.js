function inventory(input) {
    let heroes = [];

    for (const line of input) {
        let lineArr = line.split(" / ");
        let name = lineArr[0];
        let level = Number(lineArr[1]);
        let items = lineArr[2];

        let heroObj = { name, level, items };
        heroes.push(heroObj);
    }

    heroes.sort((a, b) => a.level - b.level);

    for (const hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`items => ${hero.items}`);
    }
}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
);

inventory([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]
);