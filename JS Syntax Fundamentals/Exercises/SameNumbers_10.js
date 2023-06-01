function sameNumbers(num) {
    let checkNum = num % 10;
    num = Math.floor(num / 10);
    let isEqual = true;
    let sum = checkNum;

    while (num > 0) {
        let numberToBeChecked = num % 10;
        num = Math.floor(num / 10);
        sum += numberToBeChecked;
        if (numberToBeChecked !== checkNum) {
            isEqual = false;
        }
    }

    console.log(isEqual);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);