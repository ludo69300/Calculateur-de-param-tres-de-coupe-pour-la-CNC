function calculFrRotation(vc, diam) {
	return parseInt((1000*vc)/(Math.PI*diam));
};
function calculAvance(n,fz,Z){
	let vc = parseInt(n*fz*Z);
	document.getElementById("vitesseAvance").value = vc;
		let ratio = vfMax/(n*fz*Z)
		if ( ratio>1 ) {ratio=1}
	return ratio
};
function calculAvanceZ(vc){
	document.getElementById("vitesseMaxAvanceZ").value = vc/2;
};
function calculProfonPasse(ap){
	document.getElementById("profondeurPasse").value = ap/4;
};
function claculParamcoupe() {
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
		calculs()
	});
	inputFraise.addEventListener("change", () => {
		indexFraise = parseInt(inputFraise.value);
		calculs()
	});
	inputDiam.addEventListener("change", () => {
		indexDiam = parseFloat(inputDiam.value);
		calculs()
	});
	inputNbD.addEventListener("change", () => {
		indexNbD = Math.round(inputNbD.value);
		calculs()
	});
	inputMachine.addEventListener("change", () => {
		indexMachine = parseInt(inputMachine.value);
		calculs()
	});
	btnLimite.addEventListener("change", () => {
		indexLimite = btnLimite.checked;
		calculs()
	});
	vitMaxRotation.addEventListener("change", () => {
		indexVitMaxRotation = parseInt(vitMaxRotation.value);
		calculs()
	});
	inputVitMaxAvance.addEventListener("change", () => {
		indexVitMaxAvance = parseInt(inputVitMaxAvance.value);
		calculs()
	});
	function calculs() {
		// On calcule la vitesse de rotation :
		let n = calculFrRotation(listeParam[indexMateriau][indexFraise], indexDiam);
		if (indexLimite){ 
			if (n>indexVitMaxRotation)
				{n=indexVitMaxRotation}
		};
		document.getElementById("vitesseBroche").value = n;

		// On calcule la vitesse d’avance :
		let Fz = listeParam[indexMateriau][indexDiam+1]
		console.log("Fz : " + Fz);
		let ratio = calculAvance(n, listeParam[indexMateriau][indexDiam+1],indexNbD,indexVitMaxAvance);

		// On adapte de nouveau la vitesse de rotation :
		console.log("ration : " +ratio);
		if (ratio<1) {
			n=n*ratio;
			document.getElementById("vitesseBroche").value=n;
		}
		// On calcule la vitesse de rotation sur Z:
		calculAvanceZ(document.getElementById("vitesseAvance").value);
		let ap = listeParam[indexMateriau][indexDiam+6];
		let coef=1
		if (indexLimite){ 
			coef= coeficienMachine[indexMachine]
		}
		console.log("ap  :" + ap +" coef :  "+ + coef);
		document.getElementById("profondeurPasse").value = ap/coef;
		}
		calculs()
};
