let table = document.getElementById("sampleTable");
let row = table.insertRow(3);
let cell1 = row.insertCell(0);
let cell2 = row.insertCell(1);
let cell3 = row.insertCell(2)
//   cell1.innerHTML = "NEW CELL1";
//   cell2.innerHTML = "NEW CELL2";
//   cell3.innerHTML = "new cell 3"
cellInnerHtml(cell1,"Column11")
cellInnerHtml(cell2,"Column22")
cellInnerHtml(cell3,"Column33")
//   var dataArray = ["Column11", "Column22", "Column33"];
function cellInnerHtml(cellNo , value) {
  cellNo.innerHTML = value
}