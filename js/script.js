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
//  console.log(studentInfo);
// mi restituisce tramite dot-notation il valore (in questo caso, di età cioè il numero 42)
//  console.log(studentInfo.eta);
// mi restituisce tramite braket-notation il valore (in questo caso, di età cioè il numero 42)
//  console.log(studentInfo['eta']);

//2---- Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.

for (let key in studentInfo){
    // console.log(key + ':' + studentInfo[key]);
    //  console.log( studentInfo[key]);
};


// Creare un array di oggetti di studenti.


const studentArray = [

    {
        nome: 'Cinzia',
        cognome: 'Bianchi',
        eta: 30
    },

    {
        nome: 'Ettorino',
        cognome: 'Rossi',
        eta: 27
    },

    {
        nome: 'Gino',
        cognome: 'Verdi',
        eta: 20 
    },



];

// 3--- Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.

// scorro tutto l'array studenti con un ciclo for

for (let i = 0; i < studentArray.length; i++){
    
    // mi salvo in una variabile gli object
    let studentObject = studentArray[i];
    // console.log(studentObject);

    // stampare per ognuno di essi, nome e cognome con un ciclo for in

    for (let key in studentObject){
        // all'interno del ciclo for in con un if posso escludere il parametro età
        if(key !== 'eta'){
            console.log(studentObject[key]);
        }

    }
    
};

//4--- Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// preparo i prompt per l'utente

const nameRequest = prompt('inserisci un nome');
// console.log(nameRequest);
const  surnameRequest = prompt('inserisci  il cognome');
// console.log(surnameRequest);
const ageRequest = parseInt(prompt('inserisci età'));
// console.log(ageRequest);


// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.


const newStudent = {
    nome:nameRequest,
    cognome:surnameRequest,
    eta:ageRequest
};

console.log(newStudent);






