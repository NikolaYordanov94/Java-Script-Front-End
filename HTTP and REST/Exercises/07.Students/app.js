function attachEvents() {
  window.onload = function () {
    getStudentsHandler();
  };

  const BASE_URL = "http://localhost:3030/jsonstore/collections/students";
  const tableContainer = document.getElementById("results");
  const firstNameField = document.querySelector('input[name="firstName"]');
  const lastNameField = document.querySelector('input[name="lastName"]');
  const facultyNumberField = document.querySelector('input[name="facultyNumber"]');
  const gradeField = document.querySelector('input[name="grade"]');
  const tableBody = document.getElementsByTagName("tbody")[0];

  const submitBtn = document.getElementById("submit");
  submitBtn.addEventListener("click", submitHandler);

  function submitHandler() {
    let firstName = firstNameField.value;
    let lastName = lastNameField.value;
    let facultyNumber = facultyNumberField.value;
    let grade = gradeField.value;

    const httpHeaders = {
      method: "POST",
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    };

    fetch(BASE_URL, httpHeaders)
      .then(getStudentsHandler())
      .catch((err) => {
        console.log(err);
      });

  }

  function getStudentsHandler() {
    fetch(BASE_URL)
      .then((res) => res.json())
      .then((students) => {
        tableBody.innerHTML = "";

        let studentsArr = Object.values(students);

        studentsArr.forEach((student) => {
          const newRow = createElement("tr", tableBody);
          createElement("td", newRow, student.firstName);
          createElement("td", newRow, student.lastName);
          createElement("td", newRow, student.facultyNumber);
          createElement("td", newRow, student.grade);
        });
      })
      .catch((err) => {
        console.log(err);
      })
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