// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


// 1---- Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.

const studentInfo ={
    nome: 'Patrick',
    cognome:'Galasso',
    eta:42
};
// mi restituisce tutto l'object con chiave e valore
console.log(studentInfo);
// mi restituisce tramite dot-notation il valore (in questo caso, di età cioè il numero 42)
console.log(studentInfo.eta);
// mi restituisce tramite braket-notation il valore (in questo caso, di età cioè il numero 42)
console.log(studentInfo['eta']);

//2---- Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (let key in studentInfo){
    // console.log(key);
    console.log(studentInfo);
};




