function calculFrRotation(vc, diam, rotMax , chek , machine) {
	let coef=1
	if (chek){ 
		 coef= coeficienMachine[machine]
	}
	document.getElementById("vitesseBroche").value = Math.min(rotMax,(1000*vc)/(Math.PI*diam))*coef
}
function calculAvance(n,fz,Z){
	document.getElementById("vitesseAvance").value = n*fz*Z
}
function calculAvanceZ(vc){
	document.getElementById("vitesseMaxAvanceZ").value = vc/2
}
function calculProfonPasse(ap){
	document.getElementById("profondeurPasse").value = ap/4
}
function claculeParamcoupe() {
	let inputMateriau = document.getElementById("typeMateriau");
	let inputFraise = document.getElementById("typeFraise");
	let inputDiam = document.getElementById("diam");
	let inputNbD = document.getElementById("nbdent");
	let inputMachine = document.getElementById("TypeMachine");
	let btnLimite= document.getElementById("limite");
	let inputVitMaxRotation= document.getElementById("vitMaxRotation");
	let inputVitMaxAvance= document.getElementById("vitMaxAvance");

	let indexMateriau = parseInt(inputMateriau.value);
	let indexFraise = parseInt(inputFraise.value);
	let indexDiam = parseFloat(inputDiam.value);
	let indexNbD= Math.round(inputNbD.value);
	let indexMachine= parseInt(inputMachine.value);
	let indexLimite= btnLimite.checked;
	let indexVitMaxRotation = parseInt(inputVitMaxRotation.value);
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
		indexDiam = parseFloat(inputDiam.value);
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
	vitMaxRotation.addEventListener("change", () => {
		indexVitMaxRotation = parseInt(vitMaxRotation.value);
	console.log(indexVitMaxRotation);
	})
	inputVitMaxAvance.addEventListener("change", () => {
		indexVitMaxAvance = parseInt(inputVitMaxAvance.value);
	console.log(indexVitMaxAvance);
	})
	console.log(indexDiam);
	console.log(indexVitMaxRotation);
	console.log(listeParam[indexMateriau][indexFraise]);
	console.log(indexLimite);
	console.log(indexMachine);
	calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam, indexVitMaxRotation , indexLimite , indexMachine);
	calculAvance(document.getElementById("vitesseBroche").value, listeParam[indexMateriau][indexDiam+1],indexNbD);
	calculAvanceZ(document.getElementById("vitesseAvance").value);
	calculProfonPasse(listeParam[indexMateriau][indexDiam+5]);
}

