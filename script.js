function claculeParamcoupe() {
	let inputMateriau = document.getElementById("typeMateriau");
	
  	indexMateriau = parseInt(inputMateriau.value);
	console.log(Math.round(4.9));
	console.log(Math.round(4.9));
	 inputMateriau.addEventListener("change", () => {
  		indexMateriau = inputMateriau.value;
     console.log(indexMateriau);
	})
console.log(indexMateriau);
}
