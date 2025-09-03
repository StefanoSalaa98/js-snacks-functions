/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];

console.log("Array di partenza:" ,names);

// Dichiara la funzione qui.

function firstMatch(lista, lettera){
    let risultato=[];
    lettera = lettera.toUpperCase();
    for (let i=0; i<lista.length; i++){
        const parola = lista[i];
        if(parola[0] === lettera){
            risultato.push(parola);
        }
    }
    return risultato;
}

// Invoca la funzione qui e stampa il risultato in console

let carattere = "A";
const startA = firstMatch(names, carattere);
console.log("Le stringhe che iniziano con la lettera" ,carattere, "sono:" ,startA); 

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]

carattere = "B";
const startB = firstMatch(names, carattere);
console.log("Le stringhe che iniziano con la lettera" ,carattere, "sono:" ,startB); 

carattere = "l";
const startL = firstMatch(names, carattere);
console.log("Le stringhe che iniziano con la lettera" ,carattere, "sono:" ,startL); 