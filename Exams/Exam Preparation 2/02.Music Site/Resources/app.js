window.addEventListener('load', solve);

function solve() {
    const inputGenre = document.getElementById("genre");
    const inputName = document.getElementById("name");
    const inputAuthor = document.getElementById("author");
    const inputDate = document.getElementById("date");

    const addBtn = document.getElementById("add-btn");

    addBtn.addEventListener("click", addHandler);

    let totalLikes = 0;


    function addHandler(event) {
        event.preventDefault();

        if (inputGenre.value == "" || inputName.value == "" || inputAuthor.value == "" || inputDate == "") {
            return;
        }

        let genreText = inputGenre.value;
        let nameText = inputName.value;
        let authorText = inputAuthor.value;
        let dateText = inputDate.value;

        const allHitsContainerDiv = document.getElementsByClassName("all-hits-container")[0];
        const hitsInfoContainerDiv = createElement("div", allHitsContainerDiv, "", ["hits-info"]);
        createElement("img", hitsInfoContainerDiv, "", "", "", { src: "./static/img/img.png" });
        createElement("h2", hitsInfoContainerDiv, `Genre: ${inputGenre.value}`);
        createElement("h2", hitsInfoContainerDiv, `Name: ${inputName.value}`);
        createElement("h2", hitsInfoContainerDiv, `Author: ${inputAuthor.value}`);
        createElement("h3", hitsInfoContainerDiv, `Date: ${inputDate.value}`);

        const saveBtn = createElement("button", hitsInfoContainerDiv, "Save song", ["save-btn"]);
        const likeBtn = createElement("button", hitsInfoContainerDiv, "Like song", ["like-btn"]);
        const deleteBtn = createElement("button", hitsInfoContainerDiv, "Delete", ["delete-btn"]);

        inputGenre.value = "";
        inputName.value = "";
        inputAuthor.value = "";
        inputDate.value = "";

        likeBtn.addEventListener("click", likeHandler);
        saveBtn.addEventListener("click", saveHandler);
        deleteBtn.addEventListener("click", deleteHandler);


        function likeHandler() {
            totalLikes += 1;
            likeBtn.disabled = "true";
            document.querySelector("#total-likes p").textContent = `Total Likes: ${totalLikes}`;
        }

        function saveHandler() {
            const savedHitsContainer = document.getElementsByClassName("saved-container")[0];
            savedHitsContainer.appendChild(hitsInfoContainerDiv);
            saveBtn.remove();
            likeBtn.remove();
        }

        function deleteHandler() {
            hitsInfoContainerDiv.remove();
        }

    }


    function createElement(type, parentNode, content, classes, id, attributes, useInnerHtml) {
        const htmlElement = document.createElement(type);

        if (content && useInnerHtml) {
            htmlElement.useInnerHtml = content;
        } else {
            if (content && type !== "input") {
                htmlElement.textContent = content;
            }

            if (content && type === "input") {
                htmlElement.value = content;
            }
        }

        if (classes) {
            htmlElement.classList.add(...classes);
        }

        if (id) {
            htmlElement.id = id;
        }

        // {src: "link", href....}
        if (attributes) {
            for (const key in attributes) {
                htmlElement[key] = attributes[key];
            }
        }

        if (parentNode) {
            parentNode.appendChild(htmlElement);
        }

        return htmlElement;
    }
}