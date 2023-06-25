function addItem() {
    const inputItem = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(inputItem));
    document.getElementById("items").appendChild(li);

    document.getElementById("newItemText").value = "";
}