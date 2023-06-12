function carWash(arr) {
    let value = 0;

    for (let index = 0; index < arr.length; index++) {
        let currentCommand = arr[index];
        commandAction(currentCommand);
    }
    console.log(`The car is ${value.toFixed(2)}% clean.`)

    function commandAction(currentCommand) {
        switch (currentCommand) {
            case "soap":
                value += 10;
                break;
            case "water":
                value *= 1.2;
                break;
            case "vacuum cleaner":
                value *= 1.25;
                break;
            case "mud":
                value -= value * 0.10;
                break;
        }
    }
}

carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
carWash(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]);