"use strict"; 

// Déclaration des Constantes

// Tableau de chaînes simple pour F1() (Type Complexe Array - Slide 38)
const tableauEtudiants = ["Etudiant1", "Etudiant2", "Etudiant3"]; 

// Objet littéral simple pour F2() (Type Complexe Object - Slide 39)
const etudiant = {
    nom: "John",
    prenom: "DOE",
    age: 30
};
// Tableau d'objets pour F3() (Type Complexe Array of Objects - Slide 38, 39)

const listeEtudiants = [
    { nom: "nom1", prenom: "prenom1", age: 21 },
    { nom: "nom2", prenom: "prenom2", age: 22 },
    { nom: "nom3", prenom: "prenom3", age: 23 }
];

function f1() {
    // Affichage dans la console. Seul type de sortie autorisé (Slide 33)
    console.log(tableauEtudiants);
}

function f2() {
    // Affichage d'un objet littéral (Slide 39)
    console.log(etudiant);
}

function f3() {
    const resultats = listeEtudiants.map(etud => {
        return `${etud.nom}-${etud.prenom}-${etud.age}`;
    });

    console.log(resultats);
}