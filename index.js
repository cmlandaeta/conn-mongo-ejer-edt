const app = require('./app'); // crear un protocolo de transferencia
const http = require('http');
const server = http.createServer(app); // se envia por http app que contiene la conexiona mongo

server.listen(3000,() => {
   console.log("Servidor corriendo en el puerto 3000");
})