/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.

function saluta(nome){
    let saluto;

    // Creo una nuova istanza dell'oggetto Date per ottenere la data e l'ora correnti
    const oraCorrente = new Date();

    // Estraggo l'ora
    const ore = oraCorrente.getHours();
    
    if(ore < 13){
        saluto = "Buongiorno";
    }
    else if( ore > 18){
        saluto = "Buonasera";
    }
    else{
        saluto = "Buon pomeriggio";
    }
    saluto = saluto + " " + nome;
    return saluto;
}


// Invoca la funzione qui e stampa il risultato in console

const salutaUtente = saluta(name);
console.log(salutaUtente);

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.