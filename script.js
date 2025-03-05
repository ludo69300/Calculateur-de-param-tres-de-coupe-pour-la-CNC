function claculeParamcoupe() {
	let inputMateriau = document.getElementById("typeMateriau");
	let inputFraise = document.getElementById("typeFraise");
	
	indexFraise = parseInt(inputFraise.value);
	indexMateriau = parseInt(inputMateriau.value);
	console.log(Math.round(4.9));

	 inputMateriau.addEventListener("change", () => {
		indexMateriau = inputMateriau.value;
	console.log(indexMateriau);
	})
	 inputFraise.addEventListener("change", () => {
		indexFraise = parseInt(inputFraise.value);
	console.log(indexFraise);
	})
}
