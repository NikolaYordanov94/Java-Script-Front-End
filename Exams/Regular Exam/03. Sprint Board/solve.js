function attachEvents() {

    const BASE_URL = "http://localhost:3030/jsonstore/tasks/";
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");

    const loadTasksBtn = document.getElementById("load-board-btn");
    const addTaskBtn = document.getElementById("create-task-btn");

    const toDoList = document.querySelector("article#todo-section ul.task-list");
    const inProgressList = document.querySelector("article#in-progress-section ul.task-list");
    const codeReviewList = document.querySelector("article#code-review-section ul.task-list");
    const doneList = document.querySelector("article#done-section ul.task-list");

    loadTasksBtn.addEventListener("click", loadTasksHandler);
    addTaskBtn.addEventListener("click", addTaskHandler);


    function loadTasksHandler() {
        fetch(BASE_URL)
            .then((res) => res.json())
            .then((task) => {
                toDoList.innerHTML = "";
                inProgressList.innerHTML = "";
                codeReviewList.innerHTML = "";
                doneList.innerHTML = "";

                let taskArr = Object.values(task);

                for (const task of taskArr) {
                    let status = task.status;
                    switch (status) {
                        case "ToDo":
                            const newLiToDo = createElement("li", toDoList, "", ["task"], `${task._id}`);
                            createElement("h3", newLiToDo, task.title);
                            createElement("p", newLiToDo, task.description);
                            const buttonToDo = createElement("button", newLiToDo, "Move to In Progress");
                            buttonToDo.addEventListener("click", toDoHandler);
                            break;

                        case "In Progress":
                            const newLiInProgress = createElement("li", inProgressList, "", ["task"], `${task._id}`);
                            createElement("h3", newLiInProgress, task.title);
                            createElement("p", newLiInProgress, task.description);
                            const buttonInProgress = createElement("button", newLiInProgress, "Move to Code Review");
                            buttonInProgress.addEventListener("click", inProgressHandler);
                            break;

                        case "Code Review":
                            const newLiCodeReview = createElement("li", codeReviewList, "", ["task"], `${task._id}`);
                            createElement("h3", newLiCodeReview, task.title);
                            createElement("p", newLiCodeReview, task.description);
                            const buttonReview = createElement("button", newLiCodeReview, "Move to Done");
                            buttonReview.addEventListener("click", codeReviewHandler);
                            break;

                        case "Done":
                            const newLiDone = createElement("li", doneList, "", ["task"], `${task._id}`);
                            createElement("h3", newLiDone, task.title);
                            createElement("p", newLiDone, task.description);
                            const buttonDone = createElement("button", newLiDone, "Close");
                            buttonDone.addEventListener("click", closeTaskHandler);
                            break;
                    }
                }
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function addTaskHandler() {

        let title = titleInput.value;
        let description = descriptionInput.value;
        let status = "ToDo";

        titleInput.value = "";
        descriptionInput.value = "";


        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({ title, description, status })
        };

        fetch(BASE_URL, httpHeaders)
            .then(loadTasksHandler())
            .catch((err) => {
                console.error(err);
            });
    }

    function toDoHandler(event) {
        const button = event.currentTarget;
        const parent = button.parentNode;
        const id = parent.id;

        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({ status: "In Progress" })
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadTasksHandler();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function inProgressHandler(event) {
        const button = event.currentTarget;
        const parent = button.parentNode;
        const id = parent.id;

        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({ status: "Code Review" })
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadTasksHandler();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function codeReviewHandler(event) {
        const button = event.currentTarget;
        const parent = button.parentNode;
        const id = parent.id;

        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({ status: "Done" })
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadTasksHandler();
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function closeTaskHandler(event) {
        const button = event.currentTarget;
        const parent = button.parentNode;
        const id = parent.id;

        const httpHeaders = {
            method: "DELETE"
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                loadTasksHandler();
            })
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