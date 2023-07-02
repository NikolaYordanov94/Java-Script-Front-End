function attachEvents() {
    const BASE_URL = "http://localhost:3030/jsonstore/messenger";
    const sendBtn = document.getElementById("submit");
    const refreshBtn = document.getElementById("refresh");
    const authorTextField = document.getElementsByTagName("input")[0];
    const contentTextField = document.getElementsByTagName("input")[1];
    const messagesArea = document.getElementById("messages");

    sendBtn.addEventListener("click", sendHandler);
    refreshBtn.addEventListener("click", refreshHandler);

    let messagesArr = [];
    let rowsArr = [];

    function sendHandler() {
        let author = authorTextField.value;
        let content = contentTextField.value;

        const httpHeaders = {
            method: "POST",
            body: JSON.stringify({ author, content })
        };

        fetch(BASE_URL, httpHeaders)
            .then((res) => res.json())
            .catch((err) => {
                console.error(err);
            });
    }

    function refreshHandler() {

        fetch(BASE_URL)
            .then((res) => res.json())
            .then((messages) => {
                messagesArr = Object.values(messages);

                messagesArea.innerHTML = "";
                for (const message of messagesArr) {
                    let currentAuthor = message.author;
                    let currentContent = message.content;
                    let currentRow = `${currentAuthor}: ${currentContent}`
                    rowsArr.push(currentRow);
                }
                messagesArea.value = rowsArr.join("\n");
            })
            .catch((err) => {
                console.error(err);
            })
    }

}

attachEvents();