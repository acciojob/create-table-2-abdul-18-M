const tables = document.querySelector("#myTable");

function createTable() {
    //Write your code here

	let rn = prompt("Input number of rows")
	let cn = prompt("Input number of column")

	if(rn === null || cn === null || isNaN(rn) || isNaN(cn)){
		return
	}
	rn = Number(rn)
	cn = Number(cn)

	if(rn <=0||cn<=0){
		alert("Please enter postivie number")
		return
	}

	for(let i = 0;i<rn;i++){
		const rows = document.createElement("tr")

		for(let j = 0;j<cn;j++){
			const cells = document.createElement("td")

			cells.innerHTML = `Row-${i} Column-${j}`
			rows.appendChild(cells)
		}
		tables.appendChild(rows)
	}


	
	
  
}
