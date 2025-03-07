function calculFrRotation(vc, diam, rotMax , chek , machine) {
	let coef=1
	if (chek){ 
		 coef= coeficienMachine[machine]
	}
	document.getElementById("vitesseBroche").value = parseInt(Math.min(rotMax,(1000*vc)/(Math.PI*diam))*coef);
}
function calculAvance(n,fz,Z,vfMax){
	document.getElementById("vitesseAvance").value = parseInt(Math.min(n*fz*Z,vfMax));
}
function calculAvanceZ(vc){
	document.getElementById("vitesseMaxAvanceZ").value = vc/2;
	console.log("Vc2 : " + vc);
}
function calculProfonPasse(ap){
	document.getElementById("profondeurPasse").value = ap/4;
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

	let inputVitBroche= document.getElementById("vitesseBroche");
	let inputVitAvance= document.getElementById("vitesseAvance")


	let indexMateriau = parseInt(inputMateriau.value);
	let indexFraise = parseInt(inputFraise.value);
	let indexDiam = parseFloat(inputDiam.value);
	let indexNbD= Math.round(inputNbD.value);
	let indexMachine= parseInt(inputMachine.value);
	let indexLimite= btnLimite.checked;
	let indexVitMaxRotation = parseInt(inputVitMaxRotation.value);
	let indexVitMaxAvance= parseInt(inputVitMaxAvance.value);

	let indexVitBroche= parseInt(inputVitBroche.value);
	
	inputMateriau.addEventListener("change", () => {
		indexMateriau = parseInt(inputMateriau.value);
		calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam, indexVitMaxRotation , indexLimite , indexMachine);
		calculAvanceZ(document.getElementById("vitesseAvance").value);
		calculProfonPasse(listeParam[indexMateriau][indexDiam+5]);
	})
	inputFraise.addEventListener("change", () => {
		indexFraise = parseInt(inputFraise.value);
		calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam, indexVitMaxRotation , indexLimite , indexMachine);
		calculAvanceZ(document.getElementById("vitesseAvance").value);
		calculProfonPasse(listeParam[indexMateriau][indexDiam+5]);
	})
	inputDiam.addEventListener("change", () => {
		indexDiam = parseFloat(inputDiam.value);
		calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam, indexVitMaxRotation , indexLimite , indexMachine);
		calculAvanceZ(document.getElementById("vitesseAvance").value);
		calculProfonPasse(listeParam[indexMateriau][indexDiam+5]);

	inputNbD.addEventListener("change", () => {
		indexNbD = Math.round(inputNbD.value);
		calculAvance(document.getElementById("vitesseBroche").value, listeParam[indexMateriau][indexDiam+1],indexNbD);
	})
	inputMachine.addEventListener("change", () => {
		indexMachine = parseInt(inputMachine.value);
		calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam, indexVitMaxRotation , indexLimite , indexMachine);
	})
	btnLimite.addEventListener("change", () => {
		indexLimite = btnLimite.checked;
		calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam, indexVitMaxRotation , indexLimite , indexMachine);
	})
	vitMaxRotation.addEventListener("change", () => {
		indexVitMaxRotation = parseInt(vitMaxRotation.value);
		calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam, indexVitMaxRotation , indexLimite , indexMachine);
	})
	inputVitMaxAvance.addEventListener("change", () => {
		indexVitMaxAvance = parseInt(inputVitMaxAvance.value);
		calculAvance(document.getElementById("vitesseBroche").value, listeParam[indexMateriau][indexDiam+1],indexNbD,indexVitMaxAvance);
	})

	calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam, indexVitMaxRotation , indexLimite , indexMachine);
	calculAvance(document.getElementById("vitesseBroche").value, listeParam[indexMateriau][indexDiam+1],indexNbD,indexVitMaxAvance);
	calculAvanceZ(document.getElementById("vitesseAvance").value);
	calculProfonPasse(listeParam[indexMateriau][indexDiam+5]);
}

