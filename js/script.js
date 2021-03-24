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

// posizione
var posizione= -1;
// chiedo il cognome all'utente
var cognomeUtente= prompt('Inserisci il tuo cognome:');

arrayCognomi.push(cognomeUtente);

// ora li ordino in ordine alfabetico
arrayCognomi.sort();
document.getElementById('lista-cognomi').innerHTML = ('Lista di cognomi:' + arrayCognomi);
// console.log(arrayCognomi);



// con il for 
// for(i = 0 ; i < arrayCognomi.length ; i++) {
//     if(cognomeUtente == arrayCognomi[i]) {
//         posizione= i + 1;
//     }
// }
// if(posizione != -1) {
//     alert('Il tuo cognome è in ' + posizione + ' posizione');
// }else {
//     alert('Cognome non trovato');
// }




// con il while 
var i= 0;
while(i < arrayCognomi.length) {
    if(cognomeUtente == arrayCognomi[i]) {
        posizione= i + 1;
    }
    i++;
}

if(posizione != -1) {
    alert('Il tuo cognome è in ' + posizione + ' posizione');
}else {
    alert('Cognome non trovato');
}