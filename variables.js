let name = "Bianca";
let lastname ="Pelcastre Varela";
let username = "Biank";
let age = "28";
let mail = "biancapelcastrevarela@gmail.com";
let adult = true;
let debtMoney = " 80000";
let savedMoney = " 30000";
let totaldinero = debtMoney - savedMoney

function presentacion(name,lastname,username,age,mail,debtMoney,savedMoney) {
    return "Mi nombre es " + name + " " + lastname + " pero prefiero que me digas " + username + ". Tengo " + age + " años. " + "Mi emmail es " + mail + " "+ adult + " y gano " + debtMoney + " pero gasto" + savedMoney + " El total de mi dinero ahorrado es de " + totaldinero;
}
const res = presentacion(name, lastname, username, age, mail, adult, debtMoney, savedMoney, totaldinero)
console.log(res)
//presentacion()


const Suscripcion = "Basic"
function suscripciones () {
   if  ( tipoDeSuscripcion == "Free"){
    return console.log("Solo puedes tomar los cursos gratis");
    
   }
    else if (tipoDeSuscripcion == "Basic"){
    return console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    
   } 
   else if (tipoDeSuscripcion == "Expert"){
    return console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    
   } 
   else if  (tipoDeSuscripcion == "ExpertPlusree"){
   return console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       
   }
     
} 


const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}