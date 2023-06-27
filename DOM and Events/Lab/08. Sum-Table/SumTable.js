function sumTable() {
    let sum = 0;
    const tableRows = Array.from(document.querySelectorAll("td:nth-child(2)"));

    for (let index = 0; index < tableRows.length - 1; index++) {
        let currentPrice = Number(tableRows[index].textContent);
        sum += currentPrice;
    }

    const sumElement = document.getElementById("sum");
    sumElement.textContent = `${sum.toFixed(2)}`;
}