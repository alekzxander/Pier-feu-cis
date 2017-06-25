# Pier-feu-cis

nom <- demander(entrer votre nom)
choixUtilisateur <- demander(choisir feuille,pierre,ciseaux)
scoreUtilisateur <- 0
scoreOrdi <- 0
choixOrdi <- fonction Arrondir les nombres(choisir des nombres au hasard() * 60);
				SI L ORDI choisi un nombre ENTRE 0 et 20 
						L'ORDI choisi PIERRE;
				ET SI L ORDI choisi un nombre ENTRE 20 et 40
						L' ORDI choisi FEUILLE;
				SINON L'ORDI choisi CISEAUX
				
		FONCTION comparer(choixUtilisateur, choixOrdi)
					SI (choisUtilisateur === choixOrdi)
						AFFICHER (Egalité ! )
					ET SI (choixUtilisateur === PIERRE ET choixOrdi === CISEAUX) OU (choixUtilisateur === CISEAUX ET choixOrdi === FEUILLE) OU (choixUtilisateur === FEUILLE ET choixOrdi === PIERRE)
					AFFICHER (Vous avez gagné ! Vous + choixUtilisateur + Ordi + choiOrdi)
					scoreUtilisateur + 5;

					ET SI (choixOrdi === PIERRE ET choixUtilisateur === CISEAUX) OU (choixOrdi === CISEAUX ET choixUtilisateur === FEUILLE) OU (choixOrdi === FEUILLE ET choixUtilisateur === PIERRE)
					AFFICHER (Vous avez perdu ! Vous + choixUtilisateur + Ordi + choixOrdi)
					scoreOrdi + 5;

	AFFICHER votre score et celui de l'ordi
	Utilsation de la FONCTION rejouer										
			

 