const Suscripcion = "Expert"

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
    if  (tipoDeSuscripcion == "ExpertPlusree"){
   return console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       
   }   
} 


const res = suscripciones(Suscripcion)


