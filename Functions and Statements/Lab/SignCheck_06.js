function signCheck(num1, num2, num3, arr) {
    if ((num1 < 0 && num2 > 0 && num3 > 0) || (num1 > 0 && num2 < 0 && num3 > 0) || (num1 > 0 && num2 > 0 && num3 < 0) || (num1 < 0 && num2 < 0 && num3 < 0)) {
        console.log("Negative");
    } else {
        console.log("Positive")
    }
}

signCheck(5,
    12,
    -15
);

signCheck(-6,
    -12,
    14
);