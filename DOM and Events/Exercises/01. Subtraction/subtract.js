function subtract() {
    const firstNum = document.getElementById("firstNumber");
    const secondNum = document.getElementById("secondNumber");

    const result = document.getElementById("result");
    result.textContent = Number(firstNum.value) - Number(secondNum.value);
}