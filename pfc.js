function jouer(){
var useur = prompt("Entrez votre nom")
var choixUser = prompt("Choisissez pierre; feuille ou ciseaux")
var scoreUser = 0;
var scorePc = 0;

				var choixPc = Math.random()
					if (choixPc <= 0.33){
							choixPc = "pierre";
					}else if{(choixPc <= 0.67)
							choixPc = "ciseaux";
					}else{
							choixPc = "papier";		
					}

var comparer = function(choixPc,choixUser)
{
		if(choixPc === choixUser)
		{
		return "Egalité";
		}
		else if (choixUser === "pierre")
		{
	    if(choixPc === "ciseaux")
	    {
	    	return "pierre gagne";
	    		scoreUser + 5;
	     	    }
	     	 else
	     	 {
	     	 	return "feuille gagne";
	     	 	scorePc + 5;
	     	 }
	       }
	      else if(choixUser === "feuille"){
	      	if(choixPc === "pierre"){
	      		return === "feuille gagne";
	      			scoreUser + 5;
	      	} else {
	      		return "ciseaux gagne"
	      			scoreUser + 5;
	      	}
	      } 
	     }	
	         
}