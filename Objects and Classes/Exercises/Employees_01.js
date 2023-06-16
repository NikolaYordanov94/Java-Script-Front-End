function employeesFunc(input) {
    const people = input.reduce((person, name) => {
        person[name] = name.length;
        return person;
    }, {});

    for (const key in people) {
        console.log(`Name: ${key} -- Personal Number: ${people[key]}`)
    }
}

employeesFunc([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
);

employeesFunc([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]
);