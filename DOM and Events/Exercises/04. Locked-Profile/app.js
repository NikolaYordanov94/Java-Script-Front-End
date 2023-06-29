function lockedProfile() {
    const buttonsArr = Array.from(document.getElementsByTagName("button"));

    buttonsArr.forEach((button) => {
        button.addEventListener("click", toggleHandler);
    });

    function toggleHandler(event) {
        const button = event.target;
        const div = button.parentElement;
        const divElements = Array.from(div.children);
        const showMoreText = divElements[9];
        const radioUnlocked = divElements[4];

        if (button.textContent === "Show more" && radioUnlocked.checked) {
            showMoreText.style.display = "block";
            button.textContent = "Hide it";
        } else if (button.textContent === "Hide it" && radioUnlocked.checked) {
            showMoreText.style.display = "none";
            button.textContent = "Show more";
        }
    }
}