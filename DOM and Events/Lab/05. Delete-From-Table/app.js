function deleteByEmail() {
    const emailToBeDeleted = document.querySelector('input[name="email"]').value;
    const tableSecondCol = Array.from(document.querySelectorAll("#customers tr td:nth-child(2)"));

    let foundElements = tableSecondCol
        .find((td) => td.textContent === emailToBeDeleted);

    if (foundElements) {
        foundElements.parentElement.remove();
        document.getElementById("result").textContent = "Deleted."
    } else {
        document.getElementById("result").textContent = "Not found."
    }

    // for (const td of tableSecondCol) {
    //     if (td.textContent === emailToBeDeleted) {
    //         td.parentElement.remove();
    //         document.getElementById("result").textContent = "Deleted."
    //         return;
    //     }
    // }
    // document.getElementById("result").textContent = "Not found."
}