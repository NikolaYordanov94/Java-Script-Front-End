function factorialDivision(num1, num2) {

    let result = (getFactorial(num1) / getFactorial(num2)).toFixed(2);
    console.log(result);

    function getFactorial(num) {
        if (num === 1) {
            return num;
        }

        return num * getFactorial(num - 1);
    }
}

factorialDivision(5,
    2
);

factorialDivision(6,
    2
);