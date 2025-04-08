/* Importa el modulo router derse el paquete express
Router permite crear reuta modulares y manejables dentro de una aplicacion */

const express = require('express');

/* crea una copia (isntancia) del endutador.
 esta instancia se puede utilizar para utilizar rutas especifcas 
 que luego seran integradasa en la aplicacion principal*/
const router = express.Router();


/* Rutas para el controlador de usuarios*/

const userRouter= require("./src/routes/user.routes");
router.use("/users", userRouter);

const movieRouter =require('./src/routes/movie.routes');// controlador
router.use("/movies", movieRouter); // esta linea define la ruta y el controlador

module.exports=router;