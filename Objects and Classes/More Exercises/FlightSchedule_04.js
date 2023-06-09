function flightSchedule(input) {
    let flights = input[0];
    let changedStatusFlights = input[1];
    let statusToPrintFlights = input[2];
    let flightsMap = {};
    let status = "Ready to fly";

    flights.forEach(flight => {
        let tokens = flight.split(" ");
        let number = tokens.shift();
        let destination = tokens.join(" ");

        flightsMap[number] = { number, destination, status };
    });

    let flightMapValues = Object.values(flightsMap);

    for (const flightNum of changedStatusFlights) {
        let [num, changedStatus] = flightNum.split(" ");

        for (const flight of flightMapValues) {
            if (flight.number === num) {
                flight.status = changedStatus;
            }
        }
    }

    if (statusToPrintFlights[0] === "Ready to fly") {
        for (const flight of flightMapValues) {
            if (flight.status === "Ready to fly") {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            }
        }
    } else {
        for (const flight of flightMapValues) {
            if (flight.status === "Cancelled") {
                console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`);
            }
        }
    }
}

flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
);