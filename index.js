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
