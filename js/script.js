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

// ora li ordino in ordine alfabetico
arrayCognomi.sort();
document.getElementById('lista-cognomi').innerHTML = ('Lista di cognomi:' + arrayCognomi);
// console.log(arrayCognomi);



// con il for 
// for(i = 0 ; i < arrayCognomi.length ; i++) {
//     if(cognomeUtente == arrayCognomi[i]) {
//         alert('Il tuo cognome è in ' + (i + 1) + ' posizione');
//     }
// }




// con il while 
var i= 0;
while(i < arrayCognomi.length) {
    if(cognomeUtente == arrayCognomi[i]) {
        alert('Il tuo cognome è in ' + (i + 1) + ' posizione');
    }
    i++;
}