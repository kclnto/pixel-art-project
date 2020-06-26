const myColor = document.querySelector("#colorPicker").value;
// Select color input
const mySize = document.querySelector("#sizePicker");
// Select size input
const myTable = document.querySelector("#pixelCanvas");
// Variable to shorten calling on the grid
const submit = document.querySelector("[type = 'submit']");
// Variable to shorten the submit option


submit.addEventListener("click", function() {
// Creates the grid after user selects "submit"
  event.preventDefault();
  makeGrid();
});


function makeGrid() {
// Creates grid based on user height and weight input
  event.preventDefault();
  const myHeight = document.querySelector("#inputHeight").value;
  // User selected height
  const myWidth = document.querySelector("#inputWidth").value;
  // User selected width
  myTable.innerHTML = ""
  // Clears previous grid, if applicable
  for (h = 0; h <= myHeight; h++) {
    const newRow = myTable.insertRow(-1);
    for (w = 0; w <= myWidth; w++) {
      newCell = newRow.insertCell(0);
    }
  }
}


myTable.addEventListener("click", function() {
// Allows user to change to background color of a cell to chosen color
  let myColor = document.querySelector("#colorPicker").value;
  event.target.style.backgroundColor = myColor;
  event.preventDefault();
});
