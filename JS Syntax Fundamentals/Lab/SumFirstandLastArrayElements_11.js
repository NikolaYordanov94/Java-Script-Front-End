function sumFirstAndLast(input) {
    let arr = Array.from(input);
    let firstElement = arr[0];
    let lastElement = arr[arr.length - 1];

    console.log(firstElement + lastElement);
}

sumFirstAndLast([10, 17, 22, 33]);