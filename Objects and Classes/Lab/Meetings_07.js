function meetings(input) {
    let meetingsManager = {};

    for (const line of input) {
        let parts = line.split(" ");
        let dayOfWeek = parts[0];
        let name = parts[1];

        if (!meetingsManager.hasOwnProperty(dayOfWeek)) {
            meetingsManager[dayOfWeek] = name;
            console.log(`Scheduled for ${dayOfWeek}`);
        } else {
            console.log(`Conflict on ${dayOfWeek}!`);
        }
    }

    for (const key in meetingsManager) {
        console.log(`${key} -> ${meetingsManager[key]}`);
    }
}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim']
);

meetings(['Friday Bob',
    'Saturday Ted',
    'Monday Bill',
    'Monday John',
    'Wednesday George']
);