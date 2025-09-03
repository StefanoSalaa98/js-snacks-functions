/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';
const onlyVocal = 'aeiouOUEii';
const noVocal = 'qrPnbmBBLPTRDsdfghwk';

// Dichiara la funzione qui.

function contaVocali(stringa){
    let risultato = 0;
    stringa = stringa.toLowerCase();
    const vocali =["a", "e", "i", "o", "u"];
    for (let i=0; i<stringa.length; i++){
        const lettera = stringa[i];
        if(vocali.includes(lettera)){
            risultato++;
        }
    }
    return risultato;
}


// Invoca la funzione qui e stampa il risultato in console

const numVocali = contaVocali(word);
console.log("La stringa" ,word, "contiene" ,numVocali, "vocali");


//Risultato atteso se si passa 'javascript': 3 (a, a, i)

const numVocali2 = contaVocali(onlyVocal);
console.log("La stringa" ,onlyVocal, "contiene" ,numVocali2, "vocali");

const numVocali3 = contaVocali(noVocal);
console.log("La stringa" ,noVocal, "contiene" ,numVocali3, "vocali");