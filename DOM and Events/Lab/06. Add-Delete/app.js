function addItem() {
    const inputItem = document.getElementById("newItemText").value;
    let li = document.createElement("li");
    let newAnchor = document.createElement("a");
    li.appendChild(document.createTextNode(inputItem));
    newAnchor.textContent = "[Delete]";
    newAnchor.setAttribute("href", "#");
    newAnchor.addEventListener("click", deleteHandler);
    li.appendChild(newAnchor);
    document.getElementById("items").appendChild(li);
    document.getElementById("newItemText").value = "";


    function deleteHandler(e) {
        const liItem = e.currentTarget.parentElement;
        liItem.remove();
    }
}