/* Importa el modulo router derse el paquete express
Router permite crear reuta modulares y manejables dentro de una aplicacion */

const express = require('express');

/* crea una copia (isntancia) del endutador.
 esta instancia se puede utilizar para utilizar rutas especifcas 
 que luego seran integradasa en la aplicacion principal*/
const router = express.Router();


/*  */
const movieController = require('../controllers/movie.controller');


router.get('/',movieController.index);

module.exports = router;