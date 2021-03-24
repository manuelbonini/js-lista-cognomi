// array ndi cognomi
var arrayCognomi= [
    'rossi', 
    'verdi', 
    'maestrini', 
    'caiola', 
    'freddi', 
    'borrini', 
    'manetti'
];
// chiedo il cognome all'utente
var cognomeUtente= prompt('Inserisci il tuo cognome:');

arrayCognomi.push(cognomeUtente);

console.log(arrayCognomi);