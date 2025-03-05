
function claculeParamcoupe() {
	let inputMateriau = document.getElementById("typeMateriau");
	let inputFraise = document.getElementById("typeFraise");
	let inputDiam = document.getElementById("diam");
	let inputNbD = document.getElementById("nbdent");
	let inputMachine = document.getElementById("TypeMachine");
	let btnLimite= document.getElementById("limite")
	
	    let indexMateriau = parseInt(inputMateriau.value);
	  	let indexFraise = parseInt(inputFraise.value);
		  let indexDiam = Math.round(inputDiam.value);
	    let indexNbD= parseInt(inputNbD.value);
	    let indexMachine= parseInt(inputMachine.value);
	    let indexLimite= btnLimite.checked;
	
	  inputMateriau.addEventListener("change", () => {
			indexMateriau = inputMateriau.value;
		console.log(indexMateriau);
		})
		 inputFraise.addEventListener("change", () => {
	  		indexFraise = parseInt(inputFraise.value);
	     console.log(indexFraise);
		})
	  inputDiam.addEventListener("change", () => {
	  		indexDiam = Math.round(inputDiam.value);
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
	console.log(indexFraise);
	console.log(indexLimite);
}
