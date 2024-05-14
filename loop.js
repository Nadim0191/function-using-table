var dataArray = ["Column11", "Column22", "Column33",];

  // Reference to the table row
 let tbody = document.querySelector('#sampleTable tbody');
 let tableRow = document.createElement('tr')
  tbody.appendChild(tableRow)

  // Loop through the array using a for loop
  for (var i = 0; i < dataArray.length; i++) {
  
    // let td = document.createElement("td");
    let td = tableRow.insertCell();
    td.innerHTML = dataArray[i];
  
    tableRow.appendChild(td);
  }
  
  
  
// function td(txtNode){
	
//   let td = document.createElement("TD");
//   td.appendChild(txtNode);
  
// 	return td;
// }

