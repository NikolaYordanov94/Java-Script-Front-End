function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
      const tableCells = Array.from(document.querySelectorAll("tbody tr td"));
      let searchedString = document.getElementById("searchField").value;

      for (const rowCell of tableCells) {
         rowCell.parentElement.classList.remove("select");
      }

      for (const rowCell of tableCells) {
         let rowCellText = rowCell.textContent;

         if (rowCellText.includes(searchedString)) {
            rowCell.parentElement.classList.add("select");
         }
      }
      document.getElementById("searchField").value = "";
   }
}