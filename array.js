const array = [ 1, "jaja", true, false,{nombre:'lala', edad: 3 } ];
                                        //se puede guardar un objeto en un array
const obj = {
    nombre: "Lalo",
    núm: 2,
    comidaFavorita: ['Pollo Frito', 'Vegetales'] // se puede guardar un array en un objeto
}

let a = [1,2,3] // se crea el array
let b = ['a','b','c','d','e'] //otro array


function imprimirElemento (myArray){ //Funccion que imprime el primer elemento del array
    console.log(myArray[0]);
}
imprimirElemento(a)
imprimirElemento(b)


let c = [1,2,3,4,5,] 
let d = ['a','b','c','d','e']

function recorrerArray(array) {
    for (let i = 0; i < array.length; i++) {
        console.log( array[i]);
        
    }
}
recorrerArray(c)
recorrerArray(d)
/*
1
2
3
4
5
a
b
c
d
e
*/ 
const carro = {
    marca: 'jetta',
    modelo: 'sport',
    color: 'gris',
    combustible: 'gasolina'
}

const carros = {
    marca: 'jeep',
    modelo: 'sport',
    color: 'verde',
    combustible: 'ibrido'
}

function imprimirObjeto(objeto) {
    for (let valor in objeto) {
        console.log( valor + ": " + carros[valor]);
        
    }
}
imprimirObjeto(carros)

const arr = ["free", "basic", "expert", "expertDuo"]

const tipoDeSuscripcion = {
    free: "Solo puedes tomar los cursos gratis", 
    basic: "Puedes tomar casi todos los cursos de Platzi durante un mes", 
    expert:"Puedes tomar casi todos los cursos de Platzi durante un año", 
    expertDuo: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};


        //nom funcion.             parametro, el nombre es indistinto puede ser "perro"
function consegirTipoDeSuscripcion(suscripcion) {
        //llamamos a la variable, parametro
    if (tipoDeSuscripcion[suscripcion]){ //si la variavle tipo suscripcion, toma el tipo de suscripcion que el usuario te de//
        console.log(tipoDeSuscripcion[suscripcion]);//imprime, el tipo de suscripcion y su valor! 
        return;
    }
    console.log('Este tipo de suscripcion no existe');
} //si la suscripcion ingresada no esta dentro de los conceptos establecidos regresa que no existe//
consegirTipoDeSuscripcion("basic") //la funcion recive el argumento

