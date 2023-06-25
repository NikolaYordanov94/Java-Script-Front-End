function extractText() {
    const listItems = Array.from(document.getElementsByTagName("li"));
    const result = document.getElementById("result");

    // for (const listItem of listItems) {
    //     result.value += listItem.textContent + "\n";
    // }

    listItems.forEach(item => result.value += item.textContent + "\n");
}