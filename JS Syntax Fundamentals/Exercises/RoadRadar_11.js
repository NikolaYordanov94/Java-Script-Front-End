function roadRadar(speed, area) {
    let isOverSpeedLimit = false;
    let status = "";
    let limit = "";

    switch (area) {
        case "motorway":
            limit = 130;
            if (speed > 130) {
                isOverSpeedLimit = true;

                if (speed <= 150) {
                    status = "speeding";
                } else if (speed <= 170) {
                    status = "excessive speeding";
                } else if (speed > 170) {
                    status = "reckless driving";
                }
            }
            break;

        case "interstate":
            limit = 90;
            if (speed > 90) {
                isOverSpeedLimit = true;

                if (speed <= 110) {
                    status = "speeding";
                } else if (speed <= 130) {
                    status = "excessive speeding";
                } else if (speed > 130) {
                    status = "reckless driving";
                }
            }
            break;

        case "city":
            limit = 50;
            if (speed > 50) {
                isOverSpeedLimit = true;

                if (speed <= 70) {
                    status = "speeding";
                } else if (speed <= 90) {
                    status = "excessive speeding";
                } else if (speed > 90) {
                    status = "reckless driving";
                }
            }
            break;

        case "residential":
            limit = 20;
            if (speed > 20) {
                isOverSpeedLimit = true;

                if (speed <= 40) {
                    status = "speeding";
                } else if (speed <= 60) {
                    status = "excessive speeding";
                } else if (speed > 60) {
                    status = "reckless driving";
                }
            }
            break;
    }

    if (!isOverSpeedLimit) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`)
    } else {
        console.log(`The speed is ${speed - limit} km/h faster than the allowed speed of ${limit} - ${status}`)
    }
}

roadRadar(40, 'city');
roadRadar(21, 'residential');