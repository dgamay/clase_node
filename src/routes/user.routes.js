/* Importa el modulo router derse el paquete express
Router permite crear reuta modulares y manejables dentro de una aplicacion */

const express = require('express');

/* crea una copia (isntancia) del endutador.
 esta instancia se puede utilizar para utilizar rutas especifcas 
 que luego seran integradasa en la aplicacion principal*/
const router = express.Router();


/*  */
const userController = require('../controllers/user.controller');
/* const {index} = require('../controllers/user.controller')
 */
/* Creare las rutas */

router.get('/',userController.index);
/* router.get('/', index) */

/* Esportar el router para que poueda ser ubsado en en otras partes de la api */
module.exports = router;