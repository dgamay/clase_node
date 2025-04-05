/* const User = require("../models")
 */ const { Op } = require("sequelize");
const User = require("../models/user.model");

/* Expoeta el modulo para su uso externo */

/* Funcion create, crea un nuevo usuario */
const create = async (req, res) => {
  try {
    console.log(req.body);
    const [user, created] = await User.findOrCreate({
      where: { email: req.body.email },
      defaults: req.body,
    });

    if (!created) {
      return res.status(409).json({
        status: false,
        msg: "Este email ya es existe con otro usuario. No se puede crear.",
        data: null,
      });
    }

    return res.status(201).json({
      status: true,
      msg: "Usuario creado de forma correcta",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al obtener el listado de usuarios: ${error.message}`,
      data: null,
    });
  }
};

const update = async (req, res) => {
  const idUser = req.params.id;

  try {
    const user = await User.findByPk(idUser);

    if (!user) {
      return res.status(404).json({
        status: false,
        msg: `Este usuario con el id: ${idUser} no fue encontrado en base de datos${error.message}`,
        data: null,
      });
    }

    //Validar que el usuario no exista en otro usuario
    const emailExist = await User.findOne({
      where: { email: req.body.email, id: { [Op.ne]: idUser } },
    });

    if (emailExist) {
      return res.status(409).json({
        status: false,
        msg: "Este email ya es existe con otro usuario. No se puede crear.",
        data: null,
      });
    }
    //De lo contrario almacenar el usuario

    const userUpdate = await User.update(req.body, {
      where: { id: idUser },
    });

    const userUpdated = await User.findByPk(idUser);

    return res.status(200).json({
      status: true,
      msg: ` Usuario con el id: ${idUser}, actualizado de forma correcta`,
      data: userUpdated,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al actualizar el usuario con id ${idUser}, ${error.message}`,
      data: null,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const idUser = req.params.id;

    const user = await User.findByPk(idUser);

    if (!user) {
      return res.status(404).json({
        status: false,
        msg: `Este usuario con el id: ${idUser} no fue encontrado en base de datos, ${error.message}`,
        data: null,
      });
    }

    await user.destroy();

    return res.status(200).json({
      status: true,
      msg: `Usuario con el id: ${id}, ha sido eliminado de forma correcta`,
      data: userUpdate,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al eliminar el usuario con id ${id}`,
      data: null,
    });
  }
};
const show = async (req, res) => {
  try {
    const id = req.params.id;
    const user = await User.findByPk(id);

    if (!user) {
      return res.status(404).json({
        status: false,
        msg: `Este usuario con el id: ${id} no fue encontrado`,
        data: null,
      });
    }

    return res.status(200).json({
      status: true,
      msg: "Usuario encontrado de forma correcta",
      data: user,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al obtener el usuario con id ${id}: ${error.message}`,
      data: null,
    });
  }
};

const index = async (req, res) => {
  try {
    const users = await User.findAll();

    if (!users || users.length == 0) {
      return res.status(404).json({
        status: false,
        msg: "No existen usuarios en la base de datos",
        data: null,
      });
    }
    return res.status(200).json({
      status: true,
      msg: "Listado de usuarios obtenido correctamente",
      data: users,
    });
  } catch (error) {
    return res.status(500).json({
      status: false,
      msg: `Error al obtener el listado de usuarios: ${error.message}`,
      data: null,
    });
  }
};

/* Exporta los modulos para su uso externo 
/>>>>>>> 9f48c7b94f7b5dc3dab99913c3df33b41d30be11*/

module.exports = {
  index,
  create,
  update,
  destroy,
  show,
};
