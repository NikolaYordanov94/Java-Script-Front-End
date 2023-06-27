function focused() {
    const allInputs = Array.from(document.getElementsByTagName("input"));

    for (const input of allInputs) {
        input.addEventListener("focus", focusHandler);
        input.addEventListener("blur", blurHandler);
    }

    function focusHandler(event) {
        const currentTarget = event.target;
        const divOfCurrentTarget = currentTarget.parentElement;
        divOfCurrentTarget.classList.add("focused");
    }

    function blurHandler(event) {
        const currentTarget = event.target;
        const divOfCurrentTarget = currentTarget.parentElement;
        if (divOfCurrentTarget.classList.contains("focused")) {
            divOfCurrentTarget.classList.remove("focused");
        }
    }
}