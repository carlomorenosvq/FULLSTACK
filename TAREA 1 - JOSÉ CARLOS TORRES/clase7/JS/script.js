// let array = [];

// for (let i = 0; i < 4; i++) {
//     let comensal = {
//         nombre: prompt(),
//         apellido: "González",
//         ncomensal: function Hola(params){
//             console.log(this.nombre);
//         }
//     }
//     array.push(comensal);   
// }
// console.log(array);

//CLASES 

class Persona{

    //Constructor
    constructor(nombre, apellido, colorFavorito){
        this.nombre = nombre;
        this.apellido = apellido;
        this.colorFavorito = colorFavorito;

    }

    //toString
    toString(){
        return (
          "Nombre: " +
          this.nombre +
          "Apellido: " +
          this.apellido +
          "Color Favorito: " +
          this.colorFavorito
        );
    }
    
    //Getters y Setters

    getnombre(){
        return this.nombre;
    }

    setnombre(nombre){
        this.nombre = nombre; 
    }

    getApellido(){
        return this.apellido;
    }

    setApellido(apellido){
        this.apellido = apellido; 
    }

    getColorFavorito(){
        return this.colorFavorito;
    }

    setcolorFavorito(colorFavorito){
        this.colorFavorito = colorFavorito; 
    }

    devuelveHola(){
        return "Hola " + this.nombre + this.apellido; 
    }
}

class Alumno extends Persona{
    //Constructor
    constructor(hora, asignatura, nombre, apellido, colorFavorito){
        
        super(nombre, apellido, colorFavorito);

        this.hora = hora;
        this.asignatura = asignatura;
    }

    //ToString
    toEnsena(){
        return "Hora: " + this.hora + "Asignaturas: " + this.asignatura;
    }

    //Getters y Setters 
    

}


let alumno0 = new Alumno("4", "FullStack" , "Carlos", "Torres", "Negro");

console.log(alumno0);