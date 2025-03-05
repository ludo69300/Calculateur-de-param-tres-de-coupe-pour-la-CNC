
function claculeParamcoupe() {
	let inputMateriau = document.getElementById("typeMateriau");
	let inputFraise = document.getElementById("typeFraise");
	let inputDiam = document.getElementById("diam");
	let inputNbD = document.getElementById("nbdent");
	let inputMachine = document.getElementById("TypeMachine");
	let btnLimite= document.getElementById("limite")
	let inputVitMaxTotation= document.getElementById("vitMaxTotation")
	let inputVitMaxAvance= document.getElementById("vitMaxAvance")
	
	let indexMateriau = parseInt(inputMateriau.value);
	let indexFraise = parseInt(inputFraise.value);
	let indexDiam = inputDiam.value;
	let indexNbD= Math.round(inputNbD.value);
	let indexMachine= parseInt(inputMachine.value);
	let indexLimite= btnLimite.checked;
	let indexVitMaxTotation = parseInt(inputVitMaxTotation.value);
	let indexVitMaxAvance= parseInt(inputVitMaxAvance.value);
	
	inputMateriau.addEventListener("change", () => {
		indexMateriau = parseInt(inputMateriau.value);
	console.log(indexMateriau);
	})
	inputFraise.addEventListener("change", () => {
		indexFraise = parseInt(inputFraise.value);
	console.log(indexFraise);
	})
	inputDiam.addEventListener("change", () => {
		indexDiam = inputDiam.value;
	console.log(indexDiam);
	})
	inputNbD.addEventListener("change", () => {
		indexNbD = Math.round(inputNbD.value);
	console.log(indexNbD);
	})
	inputMachine.addEventListener("change", () => {
		indexMachine = parseInt(inputMachine.value);
	console.log(indexMachine);
	})
	btnLimite.addEventListener("change", () => {
		indexLimite = btnLimite.checked;
	console.log(indexLimite);
	})
	inputVitMaxTotation.addEventListener("change", () => {
		indexVitMaxTotation = parseInt(inputVitMaxTotation.value);
	console.log(indexVitMaxTotation);
	})
	inputVitMaxAvance.addEventListener("change", () => {
		indexVitMaxAvance = parseInt(inputVitMaxAvance.value);
	console.log(indexVitMaxAvance);
	})
	console.log(indexFraise);
	console.log(indexLimite);
}
