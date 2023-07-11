function plantDiscovery(input) {
    let n = input.shift();
    let plantsMap = {};

    for (let index = 0; index < n; index++) {
        let lineOfInput = input.shift();
        let lineOfInputParts = lineOfInput.split("<->");

        let [plantName, rarity] = lineOfInputParts;
        let rating = [];

        if (!plantsMap.hasOwnProperty(plantName)) {
            plantsMap[plantName] = { plantName, rarity, rating };
        }
    }

    let command = input.shift();

    while (command != "Exhibition") {
        let commandParts = command.split(": ");
        let [typeOfCommand, data] = commandParts

        switch (typeOfCommand) {

            case "Rate":
                let dataParts = data.split(" - ");
                let [nameOfPlant, rating] = dataParts;

                if (plantsMap.hasOwnProperty(nameOfPlant)) {
                    plantsMap[nameOfPlant].rating.push(Number(rating));
                } else {
                    console.log("error");
                }
                break;

            case "Update":
                let dataPartsUpdate = data.split(" - ");
                let [nameOfPlantForUpdate, newRarity] = dataPartsUpdate;

                if (plantsMap.hasOwnProperty(nameOfPlantForUpdate)) {
                    plantsMap[nameOfPlantForUpdate].rarity = newRarity;
                } else {
                    console.log("error");
                }
                break;

            case "Reset":
                let nameOfPlantToReset = data;

                if (plantsMap.hasOwnProperty(nameOfPlantToReset)) {
                    plantsMap[nameOfPlantToReset].rating = [];
                } else {
                    console.log("error");
                }
                break;
        }

        command = input.shift();
    }

    console.log("Plants for the exhibition:");

    for (const plant in plantsMap) {
        let plantObj = plantsMap[plant];
        let ratingArr = plantObj.rating;
        const sum = ratingArr.reduce((acc, curr) => acc + curr, 0);
        let average = 0;

        if (ratingArr.length === 0) {
            average = 0.00
        } else {
            average = sum / ratingArr.length;
        }
        console.log(`- ${plant}; Rarity: ${plantObj.rarity}; Rating: ${average.toFixed(2)}`)
    }
}


plantDiscovery((["3",
    "Arnoldii<->4",
    "Woodii<->7",
    "Welwitschia<->2",
    "Rate: Woodii - 10",
    "Rate: Welwitschia - 7",
    "Rate: Arnoldii - 3",
    "Rate: Woodii - 5",
    "Update: Woodii - 5",
    "Reset: Arnoldii",
    "Exhibition"])
);