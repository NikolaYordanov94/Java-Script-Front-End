function convertToJson(name, lastName, hairColor) {
    let person = { name, lastName, hairColor };

    let personJSON = JSON.stringify(person);
    console.log(personJSON);
}

convertToJson('George', 'Jones', 'Brown');
convertToJson('Peter', 'Smith', 'Blond');