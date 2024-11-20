const express = require('express');
const cors= require('cors'); //Permite que el servidor acepte solicitudes de otros dominios.
const bodyParser = require('body-parser'); //Ayuda a analizar (parsear) los cuerpos de las solicitudes en formato JSON.
require('dotenv').config(); //Carga las variables de entorno desde un archivo .env

const app = express(); //Creamos instancia de app express, represetna el servidor.
const PORT = process.env.PORT || 3000; //Nos traemos el n° de puerto desde .env o usamos el 3000.

//Middlewares:
app.use(cors()); //Activamos cors para permitir solicitudes de otros dominios.
app.use(bodyParser.json()); //Analiza solicitudes en JSON para disponibilizar en req.body

//Importamos rutas:
const reservasRoutes = require('./routes/reservasRoutes'); //Importamos
app.use('/api/reservas', reservasRoutes); //Usamos

//Iniciar servidor:
app.listen(PORT, () => { //Prendemos el motor! Siendo el puerto la llave que lo enciende.
    console.log(`Estamos al aire en el puerto ${PORT}`); //El motor esta andando bien.
});