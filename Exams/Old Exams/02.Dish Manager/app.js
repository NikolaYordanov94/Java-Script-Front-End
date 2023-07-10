window.addEventListener("load", solve);

function solve() {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const ageInput = document.getElementById("age");
  const genderSelectInput = document.getElementById("genderSelect");
  const dishDescriptionInput = document.getElementById("task");
  const inProgressListContainer = document.getElementById("in-progress");
  const finishedListContainer = document.getElementById("finished");

  const submitBtn = document.getElementById("form-btn");
  let inProgressCounter = 0;

  submitBtn.addEventListener("click", submitHandler);

  function submitHandler(event) {
    event.preventDefault();

    if (firstNameInput.value === ""
      || lastNameInput.value === ""
      || ageInput.value === ""
      || dishDescriptionInput.value === "") {
      alert("Wrong data input");
      return;
    }

    let firstName = firstNameInput.value;
    let lastName = lastNameInput.value;
    let age = ageInput.value;
    let gender = genderSelectInput.value;
    let dishDescription = dishDescriptionInput.value;

    const newLi = createElement("li", inProgressListContainer, "", ["each-line"]);
    const newArticle = createElement("article", newLi);
    createElement("h4", newArticle, `${firstNameInput.value} ${lastNameInput.value}`);
    createElement("p", newArticle, `${genderSelectInput.value}, ${ageInput.value}`);
    createElement("p", newArticle, `Dish description: ${dishDescriptionInput.value}`);
    const editBtn = createElement("button", newLi, "Edit", ["edit-btn"]);
    const completeBtn = createElement("button", newLi, "Mark as complete", ["complete-btn"]);

    editBtn.addEventListener("click", editHandler);
    completeBtn.addEventListener("click", completeHandler);

    firstNameInput.value = "";
    lastNameInput.value = "";
    ageInput.value = "";
    genderSelectInput.value = "";
    dishDescriptionInput.value = "";

    inProgressCounter++;
    document.getElementById("progress-count").textContent = `${inProgressCounter}`;

    function editHandler() {
      firstNameInput.value = firstName;
      lastNameInput.value = lastName;
      ageInput.value = age;
      genderSelectInput.value = gender;
      dishDescriptionInput.value = dishDescription;

      newLi.remove();
      inProgressCounter--;
      document.getElementById("progress-count").textContent = `${inProgressCounter}`;
    }

    function completeHandler() {
      finishedListContainer.appendChild(newLi);
      editBtn.remove();
      completeBtn.remove();

      inProgressCounter--;
      document.getElementById("progress-count").textContent = `${inProgressCounter}`;
    }

    const clearBtn = document.getElementById("clear-btn");
    clearBtn.addEventListener("click", clearHandler);

    function clearHandler() {
      finishedListContainer.innerHTML = "";
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
