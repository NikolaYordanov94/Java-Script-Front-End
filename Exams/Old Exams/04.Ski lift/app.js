window.addEventListener('load', solve);

function solve() {
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const numberOfPeopleInput = document.getElementById("people-count");
    const fromDateInput = document.getElementById("from-date");
    const daysInput = document.getElementById("days-count");

    const ticketContainer = document.getElementsByClassName("ticket-info-list")[0];
    const confirmTicketContainer = document.getElementsByClassName("confirm-ticket")[0];

    const nextStepBtn = document.getElementById("next-btn");
    nextStepBtn.addEventListener("click", nextStepHandler);


    function nextStepHandler(event) {
        event.preventDefault();

        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let numberOfPeople = numberOfPeopleInput.value;
        let fromDate = fromDateInput.value;
        let days = daysInput.value;

        if (firstNameInput.value !== "" && lastNameInput.value !== "" && numberOfPeopleInput.value !== "" && fromDateInput.value !== "" && daysInput.value !== "") {
            const newLi = createElement("li", ticketContainer, "", ["ticket"]);
            const newArticle = createElement("article", newLi);
            createElement("h3", newArticle, `Name: ${firstNameInput.value} ${lastNameInput.value}`);
            createElement("p", newArticle, `From date: ${fromDateInput.value}`);
            createElement("p", newArticle, `For ${daysInput.value} days`);
            createElement("p", newArticle, `For ${numberOfPeopleInput.value} people`);
            const editBtn = createElement("button", newLi, "Edit", ["edit-btn"]);
            const continueBtn = createElement("button", newLi, "Continue", ["continue-btn"]);

            firstNameInput.value = "";
            lastNameInput.value = "";
            numberOfPeopleInput.value = "";
            fromDateInput.value = "";
            daysInput.value = "";

            nextStepBtn.disabled = true;

            editBtn.addEventListener("click", editHandler);
            continueBtn.addEventListener("click", continueHandler);

            function editHandler() {
                firstNameInput.value = firstName;
                lastNameInput.value = lastName;
                numberOfPeopleInput.value = numberOfPeople;
                fromDateInput.value = fromDate;
                daysInput.value = days;

                document.getElementsByClassName("ticket")[0].remove();
                nextStepBtn.disabled = false;
            }

            function continueHandler() {
                confirmTicketContainer.appendChild(newLi);
                editBtn.remove();
                continueBtn.remove();
                const confirmBtn = createElement("button", newLi, "Confirm", ["confirm-btn"]);
                const cancelBtn = createElement("button", newLi, "Cancel", ["cancel-btn"]);

                cancelBtn.addEventListener("click", cancelHandler);
                confirmBtn.addEventListener("click", confirmHandler);

                function cancelHandler() {
                    newLi.remove();
                    nextStepBtn.disabled = false;
                }

                function confirmHandler() {
                    document.getElementById("main").remove();

                    const body = document.getElementById("body");
                    const newH1 = createElement("h1", body, "Thank you, have a nice day!", "", "thank-you");
                    const backBtn = createElement("button", body, "Back", "", "back-btn");

                    backBtn.addEventListener("click", backHandler);

                    function backHandler() {
                        location.reload();
                    }
                }

            }
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




