function orders(product, quantity) {
    let singlePrice = 0;

    switch (product) {
        case "coffee":
            singlePrice = 1.50;
            break;
        case "water":
            singlePrice = 1.00;
            break;
        case "coke":
            singlePrice = 1.40;
            break;
        case "snacks":
            singlePrice = 2.00;
            break;
    }

    let totalPrice = singlePrice * quantity;
    console.log(customFormat(totalPrice, 2));

    function customFormat(price, decimalFormat) {
        return price.toFixed(decimalFormat);
    }
}

orders("water", 5);