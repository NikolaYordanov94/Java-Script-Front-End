function vacation(numberOfPeople, type, day) {
    let singlePrice = 0;
    switch (type) {
        case "Students":
            switch (day) {
                case "Friday":
                    singlePrice = 8.45;
                    break;
                case "Saturday":
                    singlePrice = 9.80;
                    break;
                case "Sunday":
                    singlePrice = 10.46;
                    break;
            }
            if (numberOfPeople >= 30) {
                singlePrice *= 0.85;
            }
            break;
        case "Business":
            switch (day) {
                case "Friday":
                    singlePrice = 10.90;
                    break;
                case "Saturday":
                    singlePrice = 15.60;
                    break;
                case "Sunday":
                    singlePrice = 16.00;
                    break;
            }
            if (numberOfPeople >= 100) {
                numberOfPeople -= 10;
            }
            break;
        case "Regular":
            switch (day) {
                case "Friday":
                    singlePrice = 15.00;
                    break;
                case "Saturday":
                    singlePrice = 20.00;
                    break;
                case "Sunday":
                    singlePrice = 22.50;
                    break;
            }
            if (numberOfPeople >= 10 && numberOfPeople <= 20) {
                singlePrice *= 0.95;
            }
            break;
    }
    let totalPrice = singlePrice * numberOfPeople;
    console.log(`Total price: ${totalPrice.toFixed(2)}`)
}

vacation(30,
    "Students",
    "Sunday"
);