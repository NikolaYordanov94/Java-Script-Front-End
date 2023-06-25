function calc() {
    const firstNum = document.getElementById("num1").value;
    const secondNum = document.getElementById("num2").value;
    
    let sum = Number(firstNum) + Number(secondNum);

    document.getElementById("sum").value = sum;
}
