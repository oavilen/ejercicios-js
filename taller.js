// ============ EJERCICIO 1.1 =================================
var nombre = "Valentina";
console.log("Nombre:", nombre);

nombre = "María";
console.log("Nombre:", nombre);

// ============ EJERCICIO 1.2 =================================
//const nombree = "Valentina";
//console.log("Nombre:", nombree);

//nombree = "María";
//console.log("Nombre:", nombree);

// const crea una variable de solo lectura, 
// no se puede cambiar su valor después de declarada.

// ============ EJERCICIO 1.3 =================================
if (false) {
    let edad = 20;
}
//console.log("Edad:", edad); 

// Las variables declaradas con let tienen alcance de bloque. 
// Como el if no se ejecuta, la variable edad no existe fuera del bloque.

// ============ EJERCICIO 2.1 =================================
let texto = "Hola mundo";       
let numero = 25;                
let esMayor = true;             
let vacio = null;               
let indefinido;                 

console.log("texto:", texto, ", tipo:", typeof texto);        
console.log("numero:", numero, ", tipo:", typeof numero);    
console.log("esMayor:", esMayor, ", tipo:", typeof esMayor); 
console.log("vacio:", vacio, ", tipo:", typeof vacio);       
console.log("indefinido:", indefinido, ", tipo:", typeof indefinido); 

// ============ EJERCICIO 2.2 =================================
let persona = {
    nombre: "Valentina",
    edad: 21
};

let hobbies = ["leer", "dibujar", "programar"];

// En JS tanto los objetos como los arrays son del tipo "object".
console.log("persona:", persona, ", tipo:", typeof persona); 
console.log("hobbies:", hobbies, ", tipo:", typeof hobbies); 

// ============ EJERCICIO 3.1 =================================
let numero1 = 10;     
let numero2 = "5";   

console.log("numero1 + numero2 =", numero1 + numero2); 
// Como uno de los valores es string, JS convierte el número a string 
// y hace una concatenación en lugar de suma numérica.

console.log("numero1 * numero2 =", numero1 * numero2); 
// En este caso JS intenta convertir el string "5" a número 
// y realiza la operación matemática correctamente.

// ============ EJERCICIO 3.2 =================================
let numToString = String(25);
console.log(numToString, ", tipo:", typeof numToString); 

let stringToNum = Number("100");
console.log(stringToNum, ", tipo:", typeof stringToNum);

let boolVacio = Boolean("");      
let boolTexto = Boolean("hola");  

console.log('"" como boolean:', boolVacio);  // false
console.log('"hola" como boolean:', boolTexto); // true

// Boolean("") -> false porque el string vacío se considera un valor "falsy"
// Boolean("hola") -> true porque cualquier string no vacío es "truthy"

// ============ EJERCICIO 4.1 =================================
console.log("10 === '10':", 10 === "10"); // false
console.log("10 == '10':", 10 == "10");   // true

// === compara valor y tipo 
// == compara solo valor

// ============ EJERCICIO 4.2 =================================
let numeroo = 7;

if (numero % 2 === 0) {
    console.log(numero, "es par");
} else {
    console.log(numero, "es impar");
}

// ============ EJERCICIO 4.3 =================================
for (let i = 1; i <= 5; i++) {
    console.log("Número:", i);
}

// ============ EJERCICIO 4.4 =================================
try {
    throw new Error("Este es un error.");
} catch (error) {
    console.log("Mensaje del error:", error.message);
}

// ============ EJERCICIO 5.1 =================================
function multiplicar(a, b) {
    return a * b;
}
console.log("Multiplicar 4*5 =", multiplicar(4, 5));

// ============ EJERCICIO 5.2 =================================
const multiplicarArrow = (a, b) => a * b;
console.log("Multiplicar 4*5 =", multiplicarArrow(4, 5)); 

// ============ EJERCICIO 5.3 =================================
const saludar = () => "¡Hola a todos!";
console.log(saludar());

// ============ EJERCICIO 6.1 =================================
let globaal = "Soy global";

function ejemplo() {
    let locaal = "Soy local";
    
    console.log("Variable global:", globaal); 
    console.log("Variable local:", locaal);  
}

ejemplo();

console.log("Variable global:", globaal); // Funciona
// console.log("Variable local:", locaal); // Error: locaal is not defined

// Las variables globales son accesibles desde cualquier parte.
// Las variables locales solo existen dentro de la función en la que fueron declaradas.

// ============ EJERCICIO 6.2 =================================
let coche = {
    marca: "Toyota",
    mostrarMarca: function() {
        console.log("La marca del coche es:", this.marca);
    }
};

coche.mostrarMarca();

// En este contexto, `this` hace referencia al objeto que llama al método (`coche`).
// Por eso `this.marca` devuelve "Toyota".

// ============ EJERCICIO 7.1 =================================
let frutas = ["Manzana", "Banana"];
console.log(frutas);

frutas.push("Naranja");
console.log(frutas);

frutas.pop();
console.log(frutas);

// ============ EJERCICIO 7.2 =================================
let numeros = [1, 2, 3];
console.log(numeros);

let numerosPorDos = numeros.map(num => num * 2);
console.log(numerosPorDos); 

let mayoresQueUno = numeros.filter(num => num > 1);
console.log(mayoresQueUno); 

// ============ EJERCICIO 7.3 =================================
console.log("\nIterando frutas con forEach:");
frutas.forEach(fruta => console.log("Fruta:", fruta));

let encontrada = frutas.find(fruta => fruta === "Banana");
console.log("find('Banana'):", encontrada);

let indiceManzana = frutas.findIndex(fruta => fruta === "Manzana");
console.log("findIndex('Manzana'):", indiceManzana);

// ============ EJERCICIO 8.1 =================================
let libro = {
    titulo: "Cien Años de Soledad",
    autor: "Gabriel García Márquez",
    mostrarInfo: function() {
        console.log(`Título: ${this.titulo}, Autor: ${this.autor}`);
    }
};

libro.mostrarInfo();

// ============ EJERCICIO 8.2 =================================
class Animal {
    constructor(nombre) {
        this.nombre = nombre;
    }

    saludar() {
        return `Hola, soy un animal llamado ${this.nombre}`;
    }
}

let miAnimal = new Animal("Mateo");
console.log(miAnimal.saludar());

// ============ EJERCICIO 8.3 =================================
class Perro extends Animal {
    constructor(nombre, raza) {
        super(nombre); 
        this.raza = raza;
    }

    saludar() {
        return `Guau! Soy ${this.nombre}, un perro de raza ${this.raza}`;
    }
}

let miPerro = new Perro("Max", "Labrador");
console.log(miPerro.saludar());