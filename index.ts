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

const myName: string = 'Gianluca';
const myAge: number = 23;
const studingTS: boolean = true;

console.log('ESERCIZIO 2');
console.log(
  `My name is ${myName}, I'm ${myAge} years old and ${
    studingTS ? "I'm" : "I'm not"
  } studing TypeScript`
);
console.log('------------------------------');

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => {return 'Ciao ' + name}

const greet = (name: string) => {
  return `Ciao ${name}`;
};

// 4) Specifica il tipo di ritorno della seguente funzione:
// const sum = (a: number, b:number) => {return a + b}

const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%).
// Usa i tipi appropriati

const calculateIVA = (price: number): number => {
  return price * 1.22;
};

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale

const getTotalLength = (str1: string, str2: string): number => {
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

let myVariable: number | null | undefined = 28;
myVariable = null;
myVariable = undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di
// stringhe letterali

type DayType = string | number;

let firstDay: DayType = 'Monday';

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3];

const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];
