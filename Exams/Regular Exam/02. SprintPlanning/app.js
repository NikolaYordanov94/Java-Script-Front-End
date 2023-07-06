window.addEventListener('load', solve);

function solve() {

    //Input Field Elements
    const titleInput = document.getElementById("title");
    const descriptionInput = document.getElementById("description");
    const labelInput = document.getElementById("label");
    const pointsInput = document.getElementById("points");
    const assigneeInput = document.getElementById("assignee");
    const sectionContainer = document.getElementById("tasks-section");
    const totalPointsElement = document.getElementById("total-sprint-points");

    // Buttons
    const createTaskBtn = document.getElementById("create-task-btn");
    const deleteTaskBtn = document.getElementById("delete-task-btn");

    let taskIdNumber = 0;
    let totalPoints = 0;

    createTaskBtn.addEventListener("click", createTaskHandler);

    function createTaskHandler() {
        if (titleInput.value === ""
            || descriptionInput.value === ""
            || labelInput.value === ""
            || pointsInput.value === ""
            || assigneeInput.value === "") {
            alert("Wrong data input");
            return;
        }

        taskIdNumber++;
        const newArticle = createElement("article", sectionContainer, "", ["task-card"], `task-${taskIdNumber}`);
        const labelElement = createElement("div", newArticle, `${labelInput.value}`, ["task-card-label"]);
        createElement("h3", newArticle, `${titleInput.value}`, ["task-card-title"]);
        createElement("p", newArticle, `${descriptionInput.value}`, ["task-card-description"]);
        createElement("div", newArticle, `Estimated at ${pointsInput.value} pts`, ["task-card-points"]);
        createElement("div", newArticle, `Assigned to: ${assigneeInput.value}`, ["task-card-assignee"]);
        const btnContainer = createElement("div", newArticle, "", ["task-card-actions"]);
        const deleteCurrentTaskBtn = createElement("button", btnContainer, "Delete");

        let title = titleInput.value;
        let description = descriptionInput.value;
        let label = labelInput.value;
        let points = pointsInput.value;
        let assignee = assigneeInput.value;

        deleteCurrentTaskBtn.addEventListener("click", deleteTaskHandler);

        if (labelElement.textContent === "Feature") {
            labelElement.classList.add("feature");
            //  labelElement.innerHTML = '<div class="task-card-label feature">Feature &#8865</div>';
        } else if (labelElement.textContent === "Low Priority Bug") {
            labelElement.classList.add("low-priority");
        } else {
            labelElement.classList.add("high-priority");
        }

        totalPoints += Number(pointsInput.value);
        totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

        resetInputs();

        function deleteTaskHandler(event) {
            const btnParent = event.currentTarget.parentNode;
            const taskToDelete = btnParent.parentNode;
            const id = taskToDelete.id;

            titleInput.value = title;
            descriptionInput.value = description;
            labelInput.value = label;
            pointsInput.value = points;
            assigneeInput.value = assignee;

            deleteTaskBtn.disabled = false;
            createTaskBtn.disabled = true;

            inputFieldsDisabled();

            deleteTaskBtn.addEventListener("click", deleteTaskCOnfirmHandler);

            function deleteTaskCOnfirmHandler() {
                taskToDelete.remove();

                totalPoints -= Number(pointsInput.value);
                totalPointsElement.textContent = `Total Points ${totalPoints}pts`;

                resetInputs();
                inputFieldsEnabled();

                createTaskBtn.disabled = false;
                deleteTaskBtn.disabled = true;
            }
        }

    }

    function inputFieldsEnabled() {
        titleInput.disabled = false;
        descriptionInput.disabled = false;
        labelInput.disabled = false;
        pointsInput.disabled = false;
        assigneeInput.disabled = false;
    }

    function inputFieldsDisabled() {
        titleInput.disabled = true;
        descriptionInput.disabled = true;
        labelInput.disabled = true;
        pointsInput.disabled = true;
        assigneeInput.disabled = true;
    }

    function resetInputs() {
        titleInput.value = "";
        descriptionInput.value = "";
        labelInput.value = "";
        pointsInput.value = "";
        assigneeInput.value = "";
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