const fs = require("fs");

// //CLASE PERSONA

// Crear una clase persona que sea el padre de una clase llamada cliente.
// La clase persona tendrá de atributos nombre apellidos y edad.
// La clase cliente tendrña de atributos lista de la compra y dinero gastado.
// Escribir un archivo buscando en la doc de node con los datos del cliente

class Persona {
  //Constructor
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
  }

  //ToString
  toString() {
    return this.nombre + this.apellido + this.edad;
  }

  //Getters y Setters

  getNombre() {
    return this.nombre;
  }
  setNombre(nombre) {
    this.nombre = nombre;
  }

  getApellido() {
    return this.apellido;
  }
  setApellido(apellido) {
    this.apellido = apellido;
  }
  getEdad() {
    return this.edad;
  }
  setEdad(edad) {
    this.edad = edad;
  }
}

class Cliente extends Persona {
  //Constructor
  constructor(nombre, apellido, edad, listaCompra, dineroGastado) {
    super(nombre, apellido, edad);

    this.listaCompra = listaCompra;
    this.dineroGastado = dineroGastado;
  }

  toString() {
    return (
      " Nombre: " +
      this.nombre +
      " Apellido: " +
      this.apellido +
      " Edad: " +
      this.edad +
      " Lista Compra: " +
      this.listaCompra +
      " Dinero Gastado: " +
      this.dineroGastado);
  }

  getListaCompra() {
    return this.listaCompra;
  }
  setListaCompra(listaCompra) {
    this.listaCompra = listaCompra;
  }
  getDineroGastado() {
    return this.dineroGastado;
  }
  setDineroGastado(dineroGastado) {
    this.dineroGastado = dineroGastado;
  }
}

let cliente1 = new Cliente("Carlos", "Torres", 24, "[paco, andres, hola]", 34);
let cliente2 = new Cliente("Paco", "Torres", 24, "[paco, andres, hola]", 34);
let cliente3 = new Cliente("Ceros", "Torres", 24, "[paco, andres, hola]", 34);
let cliente4 = new Cliente("C645los", "Torres", 24, "[paco, andres, hola]", 34);
let cliente5 = new Cliente("Cagdfos", "Torres", 23, "[paco, andres, hola]", 34);

let clientes = [cliente1, cliente2, cliente3, cliente4, cliente5];


// fs.writeFile(
//   "listaCliente.txt",
//   "primer cliente: " + cliente1.toString(),
//   function () {}
// );

for (let i = 0; i < clientes.length; i++) {
    fs.writeFile(
        "listaClienteS.txt",
        "Cliente número " + i + Cliente.toString(),
        function () {}
      );
    
}