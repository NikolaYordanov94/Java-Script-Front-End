function phoneBoookTask(input) {
    let phonebook = {};

    for (const line of input) {
        let parts = line.split(" ");
        let name = parts[0];
        let number = parts[1];
        phonebook[name] = number;
    }

    for (const key in phonebook) {
        console.log(`${key} -> ${phonebook[key]}`)
    }
}

phoneBoookTask(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
);

phoneBoookTask(['George 0552554',
    'Peter 087587',
    'George 0453112',
    'Bill 0845344']
);