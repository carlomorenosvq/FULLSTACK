

let conexion ;

function cargaDatos() {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarCargaJson; //cambia la funcion de proceso de datos, el nombre
    conexion.open("GET", "https://randomuser.me/api/?results=10",true); //lo unico que cambia en cualquier otro archivo
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlenconder");
    conexion.send();
}

function procesarCargaJson() {
    let div = document.getElementById("resp");
    if (conexion.readyState == 4 || conexion.readyState == 200) {
        let datos = JSON.parse(conexion.responseText);
        console.log(datos);
        datos.results.forEach(dato => {
            let p = document.createElement("p");
            let texto = document.createTextNode(dato.name.first);
            p.appendChild(texto);
            div.appendChild(p);
        });
        }
}

let promesa = new Promise ();
promesa.then();
promesa.catch();
promesa.finally();
window.onload = cargaDatos() ;

//HOla