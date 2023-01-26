const h1 = document.querySelector('h1');//nombre el la etiqueta
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');//punto por la clase
const pid = document.getElementById('pid');//hastag para el id
const input = document.querySelector('input');// selecciona todos los inputs
console.log(h1);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input
});
h1.innerHTML = 'Patito <br> feo';
h1.innerText = 'Patito <br> feo';
//console.log(h1.getAttribute('class'));//esta es una delas formas en las que se acceder al atributo pantalla o cualquier otro
//h1.setAttribute('class','rojo');//modificar atributos de los elementos en html

h1.classList.add('rojo');// agregar la clase directamente en el html: 'verder rojo'
h1.classList.remove('verde'); //remover la calse: solo quedaria 'rojo'

input.value = 875645// le asignamos el valor por defecto,al input desde java 



const img = document.createElement('img');//crea una imagen en html
img.setAttribute('src','https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')//le ponemos los atributos
console.log(img);
pid.append(img);//insetamos la imagendentro de un contenedort de html
pid.innerHTML = "" //eliminar el texto del pàrrafo von un strin vacio
