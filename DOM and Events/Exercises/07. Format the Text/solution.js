function solve() {
  let inputText = document.getElementById("input").value;
  let inputTextArr = inputText.split(".");
  inputTextArr.pop();
  let paragraphCounter = 0;

  while (inputTextArr.length > 0) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = inputTextArr.splice(0, 3);
    document.getElementById("output").appendChild(newParagraph);
    paragraphCounter++;

    if (paragraphCounter > 0) {
      newParagraph.textContent += "."
    }
  }
}