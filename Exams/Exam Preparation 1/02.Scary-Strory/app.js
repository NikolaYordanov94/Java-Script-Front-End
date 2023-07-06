window.addEventListener("load", solve);

function solve() {
  const firstNameField = document.getElementById("first-name");
  const lastNameField = document.getElementById("last-name");
  const ageField = document.getElementById("age");
  const storyTitleField = document.getElementById("story-title");
  const genreDropDownMenu = document.getElementById("genre");
  const storyField = document.getElementById("story");
  const previewList = document.getElementById("preview-list");

  const publishBtn = document.getElementById("form-btn");

  publishBtn.addEventListener("click", publishHandler);



  function publishHandler() {
    let firstNameText = firstNameField.value;
    let lastNameText = lastNameField.value;
    let ageText = ageField.value;
    let titleText = storyTitleField.value;
    let genreText = genreDropDownMenu.value;
    let storyText = storyField.value;

    if (firstNameField.value.trim() !== "" && lastNameField.value.trim() !== "" && ageField.value.trim() !== ""
      && storyTitleField.value.trim() !== "" && storyField.value.trim() !== "") {

      const newLi = createElement("li", "", previewList, "", ["story-info"]);

      const newArticle = document.createElement("article");
      newLi.appendChild(newArticle);

      const newH4Name = createElement("h4", `Name: ${firstNameField.value} ${lastNameField.value}`, newArticle);
      const newParagraphAge = createElement("p", `Age: ${ageField.value}`, newArticle);
      const newParagraphTitle = createElement("p", `Title: ${storyTitleField.value}`, newArticle);
      const newParagraphGenre = createElement("p", `Genre: ${genreDropDownMenu.value}`, newArticle);
      const newParagraphStory = createElement("p", `${storyField.value}`, newArticle);
      const newBtnSave = createElement("button", "Save Story", newLi, "", ["save-btn"]);

      const newBtnEdit = createElement("button", "Edit Story", newLi, "", ["edit-btn"]);
      const newBtnDelete = createElement("button", "Delete Story", newLi, "", ["delete-btn"]);

      firstNameField.value = "";
      lastNameField.value = "";
      ageField.value = "";
      storyTitleField.value = "";
      genreDropDownMenu.value = "";
      storyField.value = "";

      publishBtn.disabled = true;
      newBtnEdit.addEventListener("click", editHandler);
      newBtnDelete.addEventListener("click", deleteHandler);
      newBtnSave.addEventListener("click", saveHandler);

      function editHandler() {
        firstNameField.value = firstNameText;
        lastNameField.value = lastNameText;
        ageField.value = ageText;
        storyTitleField.value = titleText;
        genreDropDownMenu.value = genreText;
        storyField.value = storyText;
        publishBtn.disabled = false;
        newLi.remove();
      }

      function deleteHandler() {
        newLi.remove();
        publishBtn.disabled = false;
      }

      function saveHandler() {
        document.getElementsByClassName("form-wrapper")[0].remove();
        document.getElementById("side-wrapper").remove();
        const maniDivContainer = document.getElementById("main");
        const newH1 = createElement("h1", "Your scary story is saved!", maniDivContainer);
      }
    }
  }



  function createElement(type, content, parentNode, id, classes, attributes) {
    const htmlElement = document.createElement(type);

    if (content && type !== "input") {
      htmlElement.textContent = content;
    }

    if (content && type === "input") {
      htmlElement.value = content;
    }

    if (id) {
      htmlElement.id = id;
    }

    if (classes) {
      htmlElement.classList.add(...classes);
    }

    if (parentNode) {
      parentNode.appendChild(htmlElement);
    }

    if (attributes) {
      for (const key in attributes) {
        htmlElement.setAttribute(key, attributes[key]);
      }
    }

    return htmlElement;
  }
}
