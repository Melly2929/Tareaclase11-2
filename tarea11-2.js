
let menu = "verdura"

switch (menu) {
case "carne":
console.log("Se le sugiere acompañar con vino tinto");
break;
case "pescado":
console.log("Se le sugiere acompañar con vino blanco");
break;
case "verdura" :
console.log("Se le sugiere acompañar con agua");
break;
default:
console.log("elija carne, pescado o verdura");
}


let nombre =["Diego", "Anabel", "Esteban"];

nombre.push ("Ana");
 
for(let i = 0; i< nombre.length; i++){
console.log(nombre[i])

}

let vuelta = 0;
while (vuelta < 11 ) {
    console.log( vuelta +" "+ "es un numero mas chico que 11")
    vuelta++;
}



