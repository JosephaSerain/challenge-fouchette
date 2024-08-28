// Générer un nombre aléatoire entre 1 et 500
let nombreAleatoire = Math.round(Math.random() * 500);
console.log(nombreAleatoire); // Afficher le nombre aléatoire dans la console pour vérifier

// Fonction pour demander à l'utilisateur de deviner le nombre
function jouerLeJustePrix() {
    let devine = false;
    let essais = 0; 

    while (!devine) {
        // Demander à l'utilisateur de saisir un nombre
        let saisie = prompt("Devinez le juste prix (entre 1 et 500) :");
        
        // Transformer la saisie en nombre
        let nombreSaisi = Number(saisie);

        essais++;

        // Vérifier la saisie de l'utilisateur
        if (isNaN(nombreSaisi)) {
            alert("Veuillez entrer un nombre valide.");
        } else if (nombreSaisi < nombreAleatoire) {
            alert("C'est plus !");
        } else if (nombreSaisi > nombreAleatoire) {
            alert("C'est moins !");
        } else {
            alert("Bravo ! Vous avez trouvé le juste prix \nNombre d'essais : " + essais);
            devine = true;
        }
    }
}

// Appeler la fonction pour démarrer le jeu
jouerLeJustePrix();