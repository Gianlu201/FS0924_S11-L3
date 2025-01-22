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

type DayType =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

let firstDay: DayType = 'Monday';

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3];

const numbers1: number[] = [1, 2, 3];
const numbers2: Array<number> = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere
// stringhe e gli ultimi 2 numeri

const myTupla1: [string, string, string, number, number] = [
  'Gianluca',
  'Di Diego',
  'FS0924',
  2001,
  23,
];
const myTupla2: (string | number)[] = [
  'Gianluca',
  'Di Diego',
  'FS0924',
  2001,
  23,
];

// 12) Qual è la differenza tra type e interface?

// Con type è possibile andare a definire un tipo personalizzato da assegnare alle
// variabili e pertanto potranno utilizzare metodi e proprietà propri dei tipi
// primitivi da cui sono costituiti; un interface invece è una struttura che indica
// come un oggetto debba essere costruito, andando ad indicare le proprietà
// indispensabili e/o quelle opzionali

// 13) Definisci un'interfaccia in TipeScript per un oggetto dotato di proprietà:
// "firstName", "lastName" e "age"

interface HumanBeing {
  firstName: string;
  lastName: string;
  age: number;
}

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale

interface User {
  email: string;
  phone?: number;
}

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto

interface Student {
  name: string;
  valutation: number;
}

const pippo: Student = {
  name: 'Pippo',
  valutation: 8,
};

const pluto: Student = {
  name: 'Pluto',
  valutation: 9,
};

const paperino: Student = {
  name: 'Paperino',
  valutation: 5,
};

const studentsArray: Student[] = [pippo, pluto, paperino];

// 16) Crea un'interfaccia base "Veicolo" ed estendila per creare "Auto"

interface Vehicle {
  brand: string;
  yearRegistration: number;
  numberOfWheels: number;
  color: string;
}

interface Car extends Vehicle {
  numberOfCounters: number;
}

// 17) Crea un oggetto che implementi l'interfaccia "Auto"

const myCar: Car = {
  brand: 'Fiat',
  yearRegistration: 2015,
  numberOfWheels: 4,
  color: 'red',
  numberOfCounters: 5,
};

// 18) Cosa sono i Generics in TypeScript?

// I Generics sono dei tipi che vengono generalemnte passate come argomento
// per un'interfaccia e servono a definire il tipo di una o più proprietà
// di cui non ci si aspetta di sapere l'esatto tipo nel momento della
// creazione dell'interfaccia, oppure per rendere l'interfaccia maggiormente
// generica così da potersi adattare a più casistiche. Un Generic di base si
// costruisce come un'interfaccia.

// 19) È possibile avere più tipi generici in un'interfaccia?

// Sì, è possibile avere quanti tipi generici si desidera all'interno di
// un'interfaccia

// 20) Crea un'interfaccia generica per una risposta API

interface Dat {
  data: string[];
  isTrusted: boolean;
}
interface Esponse<D> {
  ok: boolean;
  data: D;
}

const myResponse1: Esponse<string> = {
  ok: true,
  data: 'ciao',
};

const myResponse2: Esponse<Dat> = {
  ok: true,
  data: {
    data: ['Pippo', 'Pluto', 'Paperino'],
    isTrusted: true,
  },
};
