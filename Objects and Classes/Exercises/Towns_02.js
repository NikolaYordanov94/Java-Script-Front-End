function townsFunc(input) {
    // for (const line of input) {
    //     let [nameTown, latitude, longitude] = line.split(" | ");
    //     let townObj = { town: nameTown, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) };
    //     console.log(townObj);
    // }


    let towns = input.reduce((data, info) => {
        let [nameTown, latitude, longitude] = info.split(" | ");
        let townObj = { town: nameTown, latitude: Number(latitude).toFixed(2), longitude: Number(longitude).toFixed(2) };
        data.push(townObj);
        return data;
    }, []);

    for (const town of towns) {
        console.log(town);
    }
}

townsFunc(['Sofia | 42.696552 | 23.32601',
    'Beijing | 39.913818 | 116.363625']
);

townsFunc(['Plovdiv | 136.45 | 812.575']);