function addItem() {
    let text = document.getElementById("newItemText").value;
    let value = document.getElementById("newItemValue").value;
    const dropDown = document.getElementById("menu");

    const option = document.createElement("option");
    option.textContent = text;
    option.value = value;

    dropDown.appendChild(option);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}