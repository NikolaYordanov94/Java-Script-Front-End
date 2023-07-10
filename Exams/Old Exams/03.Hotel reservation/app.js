window.addEventListener('load', solve);

function solve() {

    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const dateInInput = document.getElementById("date-in");
    const dateOutInput = document.getElementById("date-out");
    const numberOfGuestsInput = document.getElementById("people-count");
    const infoListContainer = document.getElementsByClassName("info-list")[0];
    const h1Verification = document.getElementById("verification");

    const nextBtn = document.getElementById("next-btn");
    nextBtn.addEventListener("click", nextHandler);


    function nextHandler(event) {
        event.preventDefault();

        if (Date.parse(dateInInput.value) >= Date.parse(dateOutInput.value)
            || firstNameInput.value === ""
            || lastNameInput.value === ""
            || dateInInput.value === ""
            || dateOutInput.value === ""
            || numberOfGuestsInput.value === "") {
            alert("Wrong input data");
            return;
        }

        let firstName = firstNameInput.value;
        let lastName = lastNameInput.value;
        let dateIn = dateInInput.value;
        let dateOut = dateOutInput.value;
        let numberOfGuests = numberOfGuestsInput.value;


        const newLi = createElement("li", infoListContainer, "", ["reservation-content"]);
        const newArticle = createElement("article", newLi);
        createElement("h3", newArticle, `Name: ${firstNameInput.value} ${lastNameInput.value}`);
        createElement("p", newArticle, `From date: ${dateInInput.value}`);
        createElement("p", newArticle, `To date: ${dateOutInput.value}`);
        createElement("p", newArticle, `For ${numberOfGuestsInput.value} people`);

        nextBtn.disabled = true;
        const editBtn = createElement("button", newLi, "Edit", ["edit-btn"]);
        const continueBtn = createElement("button", newLi, "Continue", ["continue-btn"]);

        firstNameInput.value = "";
        lastNameInput.value = "";
        dateInInput.value = "";
        dateOutInput.value = "";
        numberOfGuestsInput.value = "";

        editBtn.addEventListener("click", editHandler);
        continueBtn.addEventListener("click", continueHandler);

        function editHandler() {
            firstNameInput.value = firstName;
            lastNameInput.value = lastName;
            dateInInput.value = dateIn;
            dateOutInput.value = dateOut;
            numberOfGuestsInput.value = numberOfGuests;

            newLi.remove();
            nextBtn.disabled = false;
        }

        function continueHandler() {
            const confirmListContainer = document.getElementsByClassName("confirm-list")[0];
            confirmListContainer.appendChild(newLi);
            editBtn.remove();
            continueBtn.remove();

            const confirmBtn = createElement("button", newLi, "Confirm", ["confirm-btn"]);
            const cancelBtn = createElement("button", newLi, "Cancel", ["cancel-btn"]);

            confirmBtn.addEventListener("click", confirmHandler);
            cancelBtn.addEventListener("click", cancelHandler);

            function confirmHandler() {
                nextBtn.disabled = false;

                newLi.remove();
                h1Verification.classList.add("reservation-confirmed");
                h1Verification.textContent = "Confirmed.";
            }

            function cancelHandler() {
                nextBtn.disabled = false;

                newLi.remove();
                h1Verification.classList.add("reservation-cancelled");
                h1Verification.textContent = "Cancelled.";
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





