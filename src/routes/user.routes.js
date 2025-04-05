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

/* ################################################################################ */
/* Creare las rutas */
router.get('/',userController.index);
/* router.get('/', index) */
//rta del metodo create
// router.post('/:id',userController.create);

// router.put('/:id',userController.update);

// router.delete('/:id',userController.destroy);

// router.get('/:id',userController.show);


<<<<<<< HEAD
router.post('/:id',userController.create);

router.put('/:id',userController.update);

router.delete('/:id',userController.destroy);

router.get('/:id',userController.show);

=======
/* npm i sequelize pg --save   esta linea es para descargar */
>>>>>>> 9f48c7b94f7b5dc3dab99913c3df33b41d30be11
/* Esportar el router para que poueda ser ubsado en en otras partes de la api */
module.exports = router;