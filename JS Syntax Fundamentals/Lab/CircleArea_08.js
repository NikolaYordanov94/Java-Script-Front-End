function circleArea(input) {
    let typeOfInput = typeof input;

    if (typeOfInput === "number") {
        let circleArea = Number(Math.PI * input * input);
        console.log(`${circleArea.toFixed(2)}`);
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeOfInput}.`)
    }
}

circleArea(5);
circleArea("name");