function reverseAnArrayOfNums(n, elements) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(elements[i]);
    }

    let output = "";
    for (let index = arr.length - 1; index >= 0; index--) {
        output += arr[index];
        if (index != 0) {
            output += " ";
        }
    }

    console.log(output)
}

reverseAnArrayOfNums(3, [10, 20, 30, 40, 50]);