function addressBookTask(input) {
    let addressBookMap = {};

    for (const line of input) {
        let [name, address] = line.split(":");
        addressBookMap[name] = address;
    }

    let sorted = Object.keys(addressBookMap)
        .sort((nameA, nameB) => nameA.localeCompare(nameB));

    for (const name of sorted) {
        console.log(`${name} -> ${addressBookMap[name]}`)
    }
}

addressBookTask(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']
);

addressBookTask(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']
);