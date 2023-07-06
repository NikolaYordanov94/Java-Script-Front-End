function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/grocery/";

    const productInput = document.getElementById("product");
    const countInput = document.getElementById("count");
    const priceInput = document.getElementById("price");

    const loadBtn = document.getElementById("load-product");
    const addBtn = document.getElementById("add-product");
    const updateBtn = document.getElementById("update-product");
    const tableBody = document.getElementById("tbody");

    loadBtn.addEventListener("click", loadHandler);
    addBtn.addEventListener("click", addHandler);

    function loadHandler(event) {
        event.preventDefault();

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((products) => {
                tableBody.innerHTML = "";

                let productsArr = Object.values(products);

                productsArr.forEach((productName) => {
                    const newRow = createElement("tr", tableBody);
                    createElement("td", newRow, `${productName.product}`, ["name"]);
                    createElement("td", newRow, `${productName.count}`, ["count-product"]);
                    createElement("td", newRow, `${productName.price}`, ["product-price"]);
                    const btnContainer = createElement("td", newRow, "", ["btn"], `${productName._id}`);
                    const updateBtn = createElement("button", btnContainer, "Update", ["update"]);
                    const deleteBtn = createElement("button", btnContainer, "Delete", ["delete"]);

                    updateBtn.addEventListener("click", updateHandler);
                    deleteBtn.addEventListener("click", deleteHandler);
                });
            })
            .catch((err) => {
                console.error(err);
            });
    }

    function addHandler(event) {
        event.preventDefault();

        let product = productInput.value;
        let count = countInput.value;
        let price = priceInput.value;

        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({ product, count, price })
        };

        fetch(BASE_URL, httpHeaders)
            .then(loadHandler(event))
            .catch((err) => {
                console.error(err);
            });
    }

    function updateHandler(event) {
        const btn = event.currentTarget;
        const btnParent = btn.parentNode;
        const currentRow = btnParent.parentNode;

        updateBtn.disabled = false;
        addBtn.disabled = true;

        productInput.value = currentRow.children[0].textContent;
        countInput.value = currentRow.children[1].textContent;
        priceInput.value = currentRow.children[2].textContent;
        updateBtn.addEventListener("click", updateSubmitHandler);
        updateBtn.setAttribute("id", btnParent.id);
    }

    function deleteHandler(event) {
        const button = event.currentTarget;
        const parent = button.parentNode;
        const id = parent.id;

        const httpHeaders = {
            method: "DELETE"
        };

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(loadHandler(event))
            .catch((err) => {
                console.error(err);
            });
    }

    function updateSubmitHandler(event) {
        const button = event.currentTarget;
        const id = button.id;

        let product = productInput.value;
        let count = countInput.value;
        let price = priceInput.value;

        const httpHeaders = {
            method: 'PATCH',
            body: JSON.stringify({ product, count, price })
        }

        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => {
                productInput.value = "";
                countInput.value = "";
                priceInput.value = "";
                loadHandler(event);
            })
            .catch((err) => {
                console.error(err);
            });

            // event.preventDefault();
            // const { product, count, price } = inputDOMSelectors;
            // const payload = JSON.stringify({
            //   product: product.value,
            //   count: count.value,
            //   price: price.value
            // });
            // const httpHeaders = {
            //   method: 'PATCH',
            //   body: payload
            // }
        
            // fetch(`${BASE_URL}${productToEdit._id}`, httpHeaders)
            //   .then(() => {
            //     loadAllProductsHandler();
            //     otherDOMSelectors.addBtn.removeAttribute('disabled');
            //     otherDOMSelectors.updateBtn.setAttribute('disabled', true);
            //     otherDOMSelectors.form.reset();
            //   })
            //   .catch((err) => {
            //     console.error(err);
            //   })
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