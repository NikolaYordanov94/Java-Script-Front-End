function pointsValidation(arr) {
    let x1 = Number(arr[0]);
    let y1 = Number(arr[1]);
    let x2 = Number(arr[2]);
    let y2 = Number(arr[3]);
    let isVallid = false;

    let distance1 = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    let distance2 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
    let distance3 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));

    validDistanceCheck(distance1, distance2, distance3);

    function validDistanceCheck(distance1, distance2, distance3){

        if (Number.isInteger(distance2)) {
            console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {0, 0} is invalid`); 
        }
    
        if (Number.isInteger(distance3)) {
            console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
        } else {
            console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
        }
    
        if (Number.isInteger(distance1)) {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
        } else {
            console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
        }
    }
}


pointsValidation([3, 0, 0, 4]);
pointsValidation([2, 1, 1, 1]);