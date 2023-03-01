let oracion = "2..3";

let patron = /^[0-9]+[\?\][0-9]+$/

if(patron.test(oracion)){
    console.log("Válido");
}else{
    console.log("No válido");
}