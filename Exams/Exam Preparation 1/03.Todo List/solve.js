function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";

    const loadBtn = document.getElementById("load-button");
    const addBtn = document.getElementById("add-button");
    const toDoListContainer = document.getElementById("todo-list");
    const taskTitleInput = document.getElementById("title");

    loadBtn.addEventListener("click", loadHandler);
    addBtn.addEventListener("click", addHandler);

    function loadHandler(event) {
        event.preventDefault();

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((tasks) => {
                toDoListContainer.innerHTML = "";
                let tasksList = Object.values(tasks);

                tasksList.forEach((task) => {
                    let newLi = createElement("li", toDoListContainer, "", "", `${task._id}`);
                    createElement("span", newLi, `${task.name}`);
                    const removeBtn = createElement("button", newLi, "Remove");
                    const editBtn = createElement("button", newLi, "Edit");

                    removeBtn.addEventListener("click", deleteHandler);
                    editBtn.addEventListener("click", editHandler);
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function addHandler(event) {
        event.preventDefault();

        let name = taskTitleInput.value;

        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({ name })
        };

        fetch(BASE_URL, httpHeaders)
            .then(loadHandler(event))
            .catch((err) => {
                console.error(err);
            });
    }

    function deleteHandler(event) {
        const button = event.currentTarget;
        const parent = button.parentNode;
        const id = parent.id;

        const httpHeaders = {
            method: "DELETE"
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(loadHandler(event))
            .catch((err) => {
                console.error(err);
            });
    }

    function editHandler(event) {
        const li = event.currentTarget.parentNode;
        let taskName = li.children[0].textContent;
        li.children[0].remove();

        const newInput = createElement("input", "", `${taskName}`);
        li.prepend(newInput)

        li.children[2].remove();
        const submitBtn = createElement("button", li, "Submit");
        submitBtn.addEventListener("click", submitHandler);

    }

    function submitHandler(event) {
        const li = event.currentTarget.parentNode;
        const id = li.id;
        let input = li.children[0];

        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({ name: input.value })
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(loadHandler(event))
            .catch((err) => {
                console.error(err);
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
