// const http = require("http");
// const colors = require('colors');

// console.log()

// const server = http.createServer(function (req, res){
//     res.write('<h1>Hola desde el servidor</h1>')
// });

// http.createServer(function (req, res) {
//   res.write('<h1>Hola desde el servidor!</h1>'); 
//   res.write('<p> Hola por debajo </p>');
//   res.writeHead(200, {'Content-Type': 'text/html'}); 
//   res.end();
  
// }).listen(3000);

const buffer = require('buffer');
const fs = require('fs');

let stream = fs.ReadStream('logs.txt', 'UTF-8');

let datos = ""; 
stream.on('datos', (chunks)=> {
    data+=chunk;
    console.log(chunk);
}); 

stream.on('end', ()=>{
    console.log('Se acabo!')
});

stream.on("data", ()=>{
    console.log("Iniciando el stream...");
});

console.log("Datos = " + data);