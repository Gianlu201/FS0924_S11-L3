// 1) Quali sono i tipi primitivi principali in TypeScript?
// I tipi primitivi principali in TS sono:
//  -string
//  -number
//  -boolean
//  -undefined
//  -null,
//  -any
//  -symbol
// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con
// la tua età e un booleano che indica se stai studiando TypeScript.
var myName = 'Gianluca';
var myAge = 23;
var studingTS = true;
console.log('ESERCIZIO 2');
console.log("My name is ".concat(myName, ", I'm ").concat(myAge, " years old and ").concat(studingTS ? "I'm" : "I'm not", " studing TypeScript"));
console.log('------------------------------');
// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {return 'Ciao ' + name}
var greet = function (name) {
    return "Ciao ".concat(name);
};
// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b:number) => {return a + b}
var sum = function (a, b) {
    return a + b;
};
// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%).
// Usa i tipi appropriati
var calculateIVA = function (price) {
    return price * 1.22;
};
// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale
var getTotalLength = function (str1, str2) {
    return (str1 + str2).length;
};
// 7) Cos'è un Type Union e come si scrive?
// Un Type Union è un tipo non primitivo di TypeScript, che consente ad una variabile
// di accettare due tipi diversi di dati senza che TS riporti un errore.
// let word:string = 'World';
// word = 100;  // -> ERRORE
// let correctVar: string | number = 'World';
// correctVar = 100;  // -> Si può fare
// 8) Crea una variabile che possa contenere un numero, null o undefined
var myVariable = 28;
myVariable = null;
myVariable = undefined;
var firstDay = 'Monday';
// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3];
var numbers1 = [1, 2, 3];
var numbers2 = [1, 2, 3];
// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere
// stringhe e gli ultimi 2 numeri
var myTupla1 = [
    'Gianluca',
    'Di Diego',
    'FS0924',
    2001,
    23,
];
var myTupla2 = [
    'Gianluca',
    'Di Diego',
    'FS0924',
    2001,
    23,
];
var pippo = {
    name: 'Pippo',
    valutation: 8,
};
var pluto = {
    name: 'Pluto',
    valutation: 9,
};
var paperino = {
    name: 'Paperino',
    valutation: 5,
};
var studentsArray = [pippo, pluto, paperino];
// 17) Crea un oggetto che implementi l'interfaccia "Auto"
var myCar = {
    brand: 'Fiat',
    yearRegistration: 2015,
    numberOfWheels: 4,
    color: 'red',
    numberOfCounters: 5,
};
var myResponse1 = {
    ok: true,
    data: 'ciao',
};
var myResponse2 = {
    ok: true,
    data: {
        data: ['Pippo', 'Pluto', 'Paperino'],
        isTrusted: true,
    },
};
