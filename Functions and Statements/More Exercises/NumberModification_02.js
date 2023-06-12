function numberModification(num) {
    let sum = 0;
    let numArr = num.toString().split("");

    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }

    while (sum / numArr.length <= 5) {
        sum += 9;
        numArr.push(9);
    }

    console.log(numArr.join(""));
}

numberModification(101);
numberModification(5835);