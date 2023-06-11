function nxnMatrix(num) {
    let rows = num;
    let cols = num;

    let matrix = [];

    for (let row = 0; row < num; row++) {
        let row = [];

        for (let col = 0; col < num; col++) {
            row.push(num);
        }

        console.log(row.join(" "));
    }
}

nxnMatrix(3);
nxnMatrix(7);