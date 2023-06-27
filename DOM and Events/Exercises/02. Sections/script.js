function create(words) {
   const content = document.getElementById("content");

   for (const word of words) {
      const newDiv = document.createElement("div");
      const newParagraph = document.createElement("p");
      newParagraph.textContent = word;
      content.appendChild(newDiv);
      newDiv.appendChild(newParagraph);
      newParagraph.style.display = "none";
   }

   const paragraphsInDiv = document.querySelectorAll("div div");

   for (const paragraph of paragraphsInDiv) {
      paragraph.addEventListener("click", clickHandler);
   }

   function clickHandler(event) {
      const currentElement = event.target;
      currentElement.childNodes[0].style.display = "block";
   }
}