/*const Suscripcion = "ExpertDuo"

function suscripciones (tipoDeSuscripcion) {
    if  ( tipoDeSuscripcion == "Free"){
    return console.log("Solo puedes tomar los cursos gratis");
    
   }
    if (tipoDeSuscripcion == "Basic"){
    return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    
   } 
    if (tipoDeSuscripcion == "Expert"){
    return console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    
   } 
    if  (tipoDeSuscripcion == "ExpertDuo"){
   return console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       
   }   
} 
const res = suscripciones(Suscripcion)*/




let Suscripciones = ["Expert"]

let descripcionSuscrip = {
    Free:"Solo puedes tomar los cursos gratis",
    Basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
    Expert:"Puedes tomar casi todos los cursos de Platzi durante un año",
    ExpertDuo:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
};

function veryfiSuscr () {
    console.log(descripcionSuscrip[Suscripciones]);
   
} 
veryfiSuscr();
