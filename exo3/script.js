"use strict"; 


// Déclaration de la structure de données "Students" (Tableau d'Objets - Slide 40)
const Students = [

    { id: 1000, nom: "JOHN", prenom: "DOE", age: 14, note: 5 },
    { id: 2000, nom: "BOB", prenom: "CARLTON", age: 7, note: 1 },
    { id: 3000, nom: "RAYANE", prenom: "SMITH", age: 13, note: 13 }
];

// Constantes pour les étiquettes de délibération (Chaînes de caractères - Slide 37)
const ADMIS = "ADMIS";
const AJOURNE = "AJOURNÉ"; 





//   @param {number} note - Le paramètre unique de type numérique (float/number) (Variables et Constantes - Slide 37).
//  @returns {boolean} - true si ADMIS, false sinon (Types primitifs - Slide 37).

function B(note) { 
    //(Conditions - Slide 42, Opérateurs Rationnels - Slide 41)
    return note >= 10;
}


function A() { 
    
    // Itération sur le tableau des étudiants (Boucles - Slide 44)
    Students.forEach(etud => {
        
       
        const isAdmis = B(etud.note); // Appel de la fonction B pour la logique de délibération (Fonctions - Slide 45)
        
 
        // Utilisation de la notation Ternaire (Conditions - Slide 42)
        const statut = isAdmis ? ADMIS : AJOURNE;

        
        // Utilisation STRICTE de console.log() pour afficher le résultat UN PAR UN (Contrainte du TP, Slide 33)
        // Format du résultat: 1000: ADMIS (Template Literal pour la lisibilité - Slide 141)
        console.log(`${etud.id}: ${statut}`);
    });
}

