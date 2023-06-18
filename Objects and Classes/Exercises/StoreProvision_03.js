function storeProvision(stock, delivery) {
    let totalProducts = [...stock, ...delivery];

    let productsMap = {};

    for (let index = 1; index < totalProducts.length; index += 2) {
        let quantity = Number(totalProducts[index]);
        let product = totalProducts[index - 1];

        if (productsMap.hasOwnProperty(product)) {
            productsMap[product] += quantity;
        } else {
            productsMap[product] = quantity;
        }
    }

    for (const product in productsMap) {
        console.log(`${product} -> ${productsMap[product]}`)
    }
}

storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
);

storeProvision([
    'Salt', '2', 'Fanta', '4', 'Apple', '14', 'Water', '4', 'Juice', '5'
],
    [
        'Sugar', '44', 'Oil', '12', 'Apple', '7', 'Tomatoes', '7', 'Bananas', '30'
    ]
);