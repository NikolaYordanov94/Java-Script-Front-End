function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/phonebook";
    const personField = document.getElementById("person");
    const phoneField = document.getElementById("phone");
    const ulContainer = document.getElementById("phonebook");

    const loadBtn = document.getElementById("btnLoad");
    const createBtn = document.getElementById("btnCreate");

    loadBtn.addEventListener("click", loadHandler);
    createBtn.addEventListener("click", createHandler);

    function loadHandler() {
        fetch(BASE_URL, { method: "GET" })
            .then((res) => res.json())
            .then((phonebook) => {
                ulContainer.innerHTML = "";
                let contacts = Object.values(phonebook);

                for (const contact of contacts) {
                    let name = contact.person;
                    let number = contact.phone;
                    let newLi = createElement("li", ulContainer, `${name}: ${number}`);
                    let newDeleteBtn = createElement("button", newLi, "Delete", "", contact._id);
                    newDeleteBtn.addEventListener("click", deleteHandler);
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    function createHandler() {
        let person = personField.value;
        let phone = phoneField.value;

        const httpHeaders = {
            method: "Post",
            body: JSON.stringify({ person, phone })
        };

        fetch(BASE_URL, httpHeaders)
            .then(loadHandler())
            .catch((err) => {
                console.log(err);
            })
    }

    function deleteHandler() {
        const id = this.id;

        const httpHeaders = {
            method: "DELETE"
        };

        fetch(`${BASE_URL}/${id}`, httpHeaders)
            .then(() => {
                loadHandler();
            })
            .catch((err) => {
                console.log(err);
            });
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

attachEvents();