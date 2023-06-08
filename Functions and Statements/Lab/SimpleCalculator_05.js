function simpleCalculator(num1, num2, operator) {
    let result = 0;
    switch (operator) {
        case "multiply":
            result = multiply(num1, num2);
            break;
        case "divide":
            result = devide(num1, num2);
            break;
        case "add":
            result = add(num1, num2);
            break;
        case "subtract":
            result = subtract(num1, num2);
            break;
    }

    console.log(result);

    function multiply(num1, num2) {
        return num1 * num2;
    }

    function devide(num1, num2) {
        return num1 / num2;
    }

    function add(num1, num2) {
        return num1 + num2;
    }

    function subtract(num1, num2) {
        return num1 - num2;
    }
}

simpleCalculator(5,
    5,
    'multiply'
);