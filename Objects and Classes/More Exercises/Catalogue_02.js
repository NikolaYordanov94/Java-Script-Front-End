function catalogue(input) {
    let objects = {};

    for (const line of input) {
        let key = line[0];
        if (objects.hasOwnProperty(key)) {
            objects[key].push(line)
        } else {
            objects[key] = [line];
        }
    }

    let ordered = Object.keys(objects).sort().reduce(
        (obj, k) => {
            obj[k] = objects[k];
            return obj;
        }, {}
    );

    for (objKey in ordered) {
        console.log(objKey);
        ordered[objKey].sort((a, b) => a.localeCompare(b));

        ordered[objKey].forEach(element => {
            element = element.split(' : ');
            console.log(`  ${element[0]}: ${element[1]}`);
        });
    }
}

catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
);

catalogue([
    'Omlet : 5.4',
    'Shirt : 15',
    'Cake : 59'
]
);