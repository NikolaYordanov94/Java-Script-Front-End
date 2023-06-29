function toggle() {
    const divToShow = document.getElementById("extra");
    const buttonContent = Array.from(document.getElementsByClassName("button"))[0];

    if (buttonContent.textContent === "More") {
        divToShow.style.display = "block";
        buttonContent.textContent = "Less";
    } else {
        divToShow.style.display = "none";
        buttonContent.textContent = "More";
    }
}