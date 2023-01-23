let name = "Bianca";
let lastname ="Pelcastre Varela";
let username = "Biank";
let age = "28";
let mail = "biancapelcastrevarela@gmail.com";
let adult = true;
let debtMoney = " 80000";
let savedMoney = " 30000";
let totaldinero = debtMoney - savedMoney

// definicion o declaración de la función
function presentacion(name,lastname,username,age,mail,debtMoney,savedMoney) {
    return "Mi nombre es " + name + " " + lastname + " pero prefiero que me digas " + username + ". Tengo " + age + " años. " + "Mi emmail es " + mail + " "+ adult + " y gano " + debtMoney + " pero gasto" + savedMoney + " El total de mi dinero ahorrado es de " + totaldinero;
}

// Ejectuar función presentación
const res = presentacion(name, lastname, username, age, mail, adult, debtMoney, savedMoney, totaldinero)
console.log(res)
//presentacion()


