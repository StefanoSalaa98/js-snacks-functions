/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
const color = ["Rosso", "Giallo", "verde", "blu", "Bianco", "nero", "azzurro"];
const number = [1234, 763634, 3423, 86, 66, 4, 521, 54366353, 4553, 978, 2];
const mix = ["Luca", 345, "verde", "CIAO", 22, 1, "rosso", "Marco", 3728];

// Dichiara la funzione qui.

function firstChar(lista){
    let risultato=[];
    let parola;
    for (let i=0; i<lista.length; i++){
        parola = lista[i];
        if(typeof parola !== "string"){
            parola = parola.toString();
        }
        risultato.push(parola[0]);
    }
    return risultato;
}

// Invoca la funzione qui e stampa il risultato in console

const firstLetter = firstChar(names);

console.log("Array di partenza:" ,names);
console.log("Iniziali di ogni elemento:" ,firstLetter);

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]

const firstLetter2 = firstChar(color);
console.log("Array di partenza:" ,color);
console.log("Iniziali di ogni elemento:" ,firstLetter2);

const firstNumber = firstChar(number);
console.log("Array di partenza:" ,number);
console.log("Iniziali di ogni elemento:" ,firstNumber);

const first = firstChar(mix);
console.log("Array di partenza:" ,mix);
console.log("Iniziali di ogni elemento:" ,first);