function printAndSum(startNum, endNum) {
    let arr = [];
    let sum = 0;

    for (let i = startNum; i <= endNum; i++) {
        arr.push(i);
        sum += i;
    }

    console.log(arr.join(" "));
    console.log(`Sum: ${sum}`);
}

printAndSum(5, 10);