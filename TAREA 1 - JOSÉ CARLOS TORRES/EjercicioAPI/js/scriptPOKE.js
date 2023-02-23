let conexion ; // suele ponerse xhr como conexion

function cargaDatos() {
    conexion = new XMLHttpRequest();
    conexion.onreadystatechange = procesarCargaJson; //cambia la funcion de proceso de datos, el nombre
    conexion.open("GET", "https://pokeapi.co/api/v2/pokemon/pikachu",true); //lo unico que cambia en cualquier otro archivo, GET para "probar", mejor usar POST
    conexion.setRequestHeader("Content-Type","application/x-www-form-urlenconder");
    conexion.send();
}

function procesarCargaJson() {
    let div = document.getElementById("resp");
    if (conexion.readyState == 4 || conexion.readyState == 200) {
        let datos = JSON.parse(conexion.responseText);
        console.log(conexion.responseText);
        let p = document.createElement("p");
        let texto = document.createTextNode(datos.name);
        p.appendChild(texto);
        div.appendChild(p);
        let img = document.createElement("img");
        img.src= "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png";
        div.appendChild(img);

        
        // datos.results.forEach(dato => {
        //     let p = document.createElement("p");
        //     let texto = document.createTextNode(dato.name);
        //     p.appendChild(texto);
        //     div.appendChild(p);
        // });




        }
}

window.onload = cargaDatos() ;