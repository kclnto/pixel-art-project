// Select size form
const mySize = document.querySelector("#sizePicker");
// Variable to shorten calling on the grid
const myTable = document.querySelector("#pixelCanvas");


// Creates the grid after user selects "submit"
mySize.addEventListener("submit", function() {
  event.preventDefault();
  makeGrid();
});

// Creates grid based on user height and weight form
function makeGrid() {
  event.preventDefault();
  // User selected height
  const myHeight = document.querySelector("#inputHeight").value;
  // User selected width
  const myWidth = document.querySelector("#inputWidth").value;
  // Clears previous grid, if applicable
  myTable.innerHTML = ""
  for (h = 1; h <= myHeight; h++) {
    const newRow = myTable.insertRow(-1);
    for (w = 1; w <= myWidth; w++) {
      newCell = newRow.insertCell(0);
      // Allows user to change to background color of a cell to chosen color
      newCell.addEventListener("click", function() {
        let myColor = document.querySelector("#colorPicker").value;
        event.target.style.backgroundColor = myColor;
        event.preventDefault();
      });
    }
  }
}
