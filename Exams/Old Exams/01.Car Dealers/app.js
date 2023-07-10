window.addEventListener("load", solve);

function solve() {
  const makeInput = document.getElementById("make");
  const modelInput = document.getElementById("model");
  const yearInput = document.getElementById("year");
  const fuelInput = document.getElementById("fuel");
  const originalCostInput = document.getElementById("original-cost");
  const sellingPriceInput = document.getElementById("selling-price");
  const tableBodyContent = document.getElementById("table-body");
  const carList = document.getElementById("cars-list");
  let totalCostSelling = 0;

  const publishBtn = document.getElementById("publish");

  publishBtn.addEventListener("click", publishHandler);

  function publishHandler(event) {
    event.preventDefault();

    let make = makeInput.value;
    let model = modelInput.value;
    let year = yearInput.value;
    let fuel = fuelInput.value;
    let originalCost = Number(originalCostInput.value);
    let sellingPrice = Number(sellingPriceInput.value);

    if (Number(originalCostInput.value) > Number(sellingPriceInput.value)
      || makeInput.value === ""
      || modelInput.value === ""
      || yearInput.value === ""
      || fuelInput.value === ""
      || originalCostInput.value === ""
      || sellingPriceInput.value === "") {
      alert("Wrong data input!");
      return;
    }

    const newTr = createElement("tr", tableBodyContent, "", ["row"]);
    createElement("td", newTr, `${make}`);
    createElement("td", newTr, `${model}`);
    createElement("td", newTr, `${year}`);
    createElement("td", newTr, `${fuel}`);
    createElement("td", newTr, `${originalCost}`);
    createElement("td", newTr, `${sellingPrice}`);
    const buttonsTd = createElement("td", newTr, "");

    const editBtn = createElement("button", buttonsTd, "Edit", ["action-btn", "edit"]);
    const sellBtn = createElement("button", buttonsTd, "Sell", ["action-btn", "sell"]);

    makeInput.value = "";
    modelInput.value = "";
    yearInput.value = "";
    fuelInput.value = "";
    originalCostInput.value = "";
    sellingPriceInput.value = "";

    editBtn.addEventListener("click", editHandler);
    sellBtn.addEventListener("click", sellHandler);

    function editHandler() {
      makeInput.value = make;
      modelInput.value = model;
      yearInput.value = year;
      fuelInput.value = fuel;
      originalCostInput.value = originalCost;
      sellingPriceInput.value = sellingPrice;

      newTr.remove();
    }

    function sellHandler() {
      const newLi = createElement("li", carList, "", ["each-list"]);
      createElement("span", newLi, `${make} ${model}`);
      createElement("span", newLi, `${year}`);
      createElement("span", newLi, `${sellingPrice - originalCost}`);
      totalCostSelling += (sellingPrice - originalCost);
      totalCostSelling = totalCostSelling.toFixed(2);
      document.getElementById("profit").textContent = totalCostSelling;

      newTr.remove();
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
