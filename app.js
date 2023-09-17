require('dotenv').config();
const express = require('express');
const app = express(); // crea una nueva apps en app

// para poder utilizar el modulo de mongoose

const mongoose = require('mongoose');

(async() => {
   try{
      await  mongoose.connect(process.env.MONGO_URI_TEST)
      console.log('Conexion a MongoDB exitosa')
   }catch(error){
      console.log(error);

   }
})()

// luego de esto debemos iniciar nuestro servidor

module.exports = app;