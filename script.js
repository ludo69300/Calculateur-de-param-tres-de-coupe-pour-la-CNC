function claculeParamcoupe() {
	let inputMateriau = document.getElementById("typeMateriau");
	let options = inputMateriau.querySelectorAll("option");
	
  	indexMateriau = parseInt(inputMateriau.value);
	console.log(Math.round(4.9));
	
    for (let index = 0; index < options.length; index++) {
        options[index].addEventListener("change", (event) => {
			indexMateriau = parseInt(event.target.value)
        })
    }
console.log(indexMateriau);
}