// Esto es como un print
console.log("Hola mundo")

// Variables - solo existen number, string y boolean
//NUMBER
let a: number = 1;
let b: number = 2;
let c: number = a + b;
console.log("la suma es " + c);

//STRING
let nombre: string = "hola mundo"
console.log("el PC dice: " + nombre);

//BOOLEAN
let esValido: boolean = true;

//Variable INDEFINIDA
let numero: number;
console.log(numero)

//Variable ANY (equivale a dynamic en Flutter
let cualquiera: any = 12;
console.log(cualquiera)
cualquiera = [1, 2, 3];
console.log(cualquiera)
cualquiera = 'Antonio II';
console.log(cualquiera)

//Variable Object - crea objeto "rápidamente"
const persona: Object = {
    'nombre':'Dominik',
    'edad': 25,
    'esCalvo':true
}
console.log("Objeto persona: ", persona)

// Bucle IF
if (esValido) {
    console.log("soy válido")
} else {
    console.log("no soy valido")
}

//Array
const frutas: string[] = ['Pera','Manzana','melon'];
console.log("tienes "+frutas.length+" frutas");
    //Acceder a un elemento del array
console.log(frutas[0]);
    //Añadir al final del array
frutas.push('banana');
    //Añadir al principio
frutas.unshift('Melocoton');
    //Quitar el último elemento del array
frutas.pop();
    //Imprimir array
console.log('Lista de frutas: ', frutas);
    //Imprimir alternativo
console.table(frutas);
    //Averiguar posicion de un elemento - devuelve -1 si no hay nada
const posicion: number = frutas.indexOf('Manzana');
console.log("la posicion de Manzana es " + posicion);
    //Eliminar un numero de elementos a partir de cierta posicion
frutas.splice(2,3);
console.log(frutas);
    //Ordenar el array
frutas.sort();
console.log(frutas)
    //Fusionar o concatenar arrays
const frutas2: string[] = ['Fresa','Ciruela'];
const frutas1y2: string[] = frutas.concat(frutas2);
console.log(frutas1y2);

//Métodos - en Angular no se especifica public, private, protected
function sumar(a: number, b:number): number {
    return a + b;
}
const suma: number = sumar(3,4);
console.log(suma);

//Clases
class Coche {
    private _id: number;
    private _marca: string;
    private _modelo: string;
    private _descripcion?: string;
    private _imagen?: string;

    //Constructor
    constructor(id:number, marca:string, modelo:string, descripcion?:string, imagen?:string) {
        this._id = id;
        this._marca = marca;
        this._modelo = modelo;
        this._descripcion = descripcion;
        this._imagen = imagen;
    }


    get id(): number {
        return this._id;
    }

    set id(value: number) {
        this._id = value;
    }

    get marca(): string {
        return this._marca;
    }

    set marca(value: string) {
        this._marca = value;
    }

    get modelo(): string {
        return this._modelo;
    }

    set modelo(value: string) {
        this._modelo = value;
    }

    get descripcion(): string {
        return this._descripcion;
    }

    set descripcion(value: string) {
        this._descripcion = value;
    }

    get imagen(): string {
        return this._imagen;
    }

    set imagen(value: string) {
        this._imagen = value;
    }
}

    //Instanciar clase
const coche1: Coche = new Coche(1, 'Renault', 'Twingo');
console.log(coche1);

//Interfaces
interface Coche {
    id: number;
    marca: string;
    modelo: string;
}


