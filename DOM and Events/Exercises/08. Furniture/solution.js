function solve() {
  const generateBtn = Array.from(document.getElementsByTagName("button"))[0];
  const buyBtn = Array.from(document.getElementsByTagName("button"))[1];
  const [generateTextArea, buyTextArea] = Array.from(document.getElementsByTagName("textarea"));
  const tbody = document.querySelector(".table > tbody");

  generateBtn.addEventListener("click", generateHandler);
  buyBtn.addEventListener("click", buyHandler);


  function generateHandler() {
    const data = JSON.parse(generateTextArea.value);
    for (const { img, name, price, decFactor } of data) {
      const tableRow = createElement("tr", "", tbody);
      const firstColumnTd = createElement("td", "", tableRow);
      createElement("img", "", firstColumnTd, "", "", { src: img });
      const secondColumnTd = createElement("td", "", tableRow);
      createElement("p", name, secondColumnTd);
      const thirdColumnTd = createElement("td", "", tableRow);
      createElement("p", price, thirdColumnTd);
      const fourthColumnTd = createElement("td", "", tableRow);
      createElement("p", decFactor, fourthColumnTd);
      const fifthColumnTd = createElement("td", "", tableRow);
      createElement("input", "", fifthColumnTd, "", "", { type: "checkbox" });

    }
  }

  let products = [];
  let totalPrice = 0;
  let totalDecFactor = 0;
  let outputStr = "";

  function buyHandler() {
    const checkedItems = Array.from(document.querySelectorAll("input:checked"));
    for (const item of checkedItems) {
      const checkBoxTd = item.parentElement;
      const row = checkBoxTd.parentElement;

      let name = row.children[1].children[0].textContent;
      let price = Number(row.children[2].children[0].textContent);
      let decFactor = Number(row.children[3].children[0].textContent);
      products.push(name);
      totalPrice += price;
      totalDecFactor += decFactor;
    }
    outputStr = `Bought furniture: ${products.join(", ")}\nTotal price: ${totalPrice.toFixed(2)}\nAverage decoration factor: ${totalDecFactor / checkedItems.length}`;

    buyTextArea.textContent = outputStr;
  }

  // type = string
  // content = string
  // id = string
  // classes = array of strings
  // attributes = object
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