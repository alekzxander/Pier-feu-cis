function jouer(){
var useur = prompt("Entrez votre nom")
var choixUser = prompt("Choisissez pierre; feuille ou ciseaux")}
var scoreUser = 0;
var scoreOrdi = 0;

					
					
var choixOrdi = Math.floor(Math.random () *60)
		if (choixOrdi <= 20){
			choixOrdi = "pierre";
		}else if (choixOrdi <= 40) && (choixOrdi > 20){
			choixOrdi = "ciseaux";
		}else {
			choixOrdi = "feuille";
		}	
						
function comparer(choixUser, choixOrdi){
		 if (choixUser === choixOrdi){
		 	alert('Egalité')
		 }
		 else if (choixUser === "pierre") && (choixOrdi === "ciseaux") || (choixUser === "ciseaux") && (choixOrdi === "feuille" ) || (choixUser === "feuille") && (choixOrdi === "pierre"){
		 	alert("Vous avez gagné ! l'ordinateur a choisi" + choixOrdi );
		 	scoreUser + 5;

		 }
		 else if (choixOrdi === "ciseaux") && (choixUser === "feuille") || (choixOrdi === "pierre") && (choixUser === "ciseaux") || (choixOrdi === "feuille") && (choixUser === "pierre"){
		 	alert("Vous avez perdu ! L'ordinateur a choisi" + choixOrdi);
		 	scoreOrdi + 5;
		 }


alert("Votre score est de " + scoreUser + "contre " + scoreOrdi +" pour l'ordinateur !")

}