function addAndSubtract(num1, num2, num3) {

    let result = sum(num1, num2) - num3;
    console.log(result);


    function sum(num1, num2) {
        return num1 + num2;
    }
}

addAndSubtract(23,
    6,
    10
);

addAndSubtract(1,
    17,
    30
);