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