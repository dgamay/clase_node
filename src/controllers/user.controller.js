/* const User = require("../models")
 */
const { Op } = require("sequelize");
const User = require('../models/user.model');

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
                msg: "Este email ya existe con otro usuario. No se puede crear.",
                data: null
            });
        }

        return res.status(201).json({
            status: true,
            msg: "Usuario creado de forma correcta",
            data: user
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            // Estaba mal: msg: `Error al obtener el listado de usuarios: ${error.message}`,
            msg: `Error al crear el usuario: ${error.message}`, // Correccion
            data: null
        });
    }
};

const update = async (req, res) => {
    try {
        const idUser = req.params.id;

        // Estaba mal: const user = await User.findByPk(id)
        const user = await User.findByPk(idUser); // Correccion: usar idUser

        if (!user) {
            return res.status(404).json({
                status: false,
                // Estaba mal: msg: `Este usuario con el id: ${id} no fue encontrado en base de datos`,
                msg: `Este usuario con el id: ${idUser} no fue encontrado en base de datos`, // Correccion: usar idUser
                data: null
            });
        }

        //Validar que el email no exista en otro usuario
        // Estaba mal: const emailExist = await User.FindOne({
        const emailExist = await User.findOne({ // Correccion: usar findOne (case-sensitive)
            where: {
                email: req.body.email,
                id: { [Op.ne]: idUser }
            },
        });

        if (emailExist) {
            return res.status(409).json({
                status: false,
                // Estaba mal: msg: "Este email ya es existe con otro usuario. No se puede crear.",
                msg: "Este email ya existe con otro usuario. No se puede actualizar.", // Correccion: mensaje más apropiado
                data: null
            });
        }

        //De lo contrario almacenar el usuario
        const [rowsUpdated] = await User.update(req.body, { // Se obtiene el número de filas actualizadas
            where: { id: idUser },
        });

        if (rowsUpdated === 0) {
            return res.status(200).json({ // Aunque no hubo error, no se actualizó nada
                status: true,
                msg: `No se realizaron cambios en el usuario con id: ${idUser}`,
                data: null
            });
        }

        const userUpdated = await User.findByPk(idUser);

        return res.status(200).json({
            status: true,
            msg: ` Usuario con el id: ${idUser}, actualizado de forma correcta`,
            data: userUpdated
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            // Estaba mal: msg: `Error al actualizar el usuario con id ${idUser}`,
            msg: `Error al actualizar el usuario con id ${req.params.id}: ${error.message}`, // Correccion: usar req.params.id para mayor claridad
            data: null
        });
    }
};


const destroy = async (req, res) => {
    try {
        const idUser = req.params.id;

        // Estaba mal: const user = await User.findByPk(id)
        const user = await User.findByPk(idUser); // Correccion: usar idUser

        if (!user) {
            return res.status(404).json({
                status: false,
                // Estaba mal: msg: `Este usuario con el id: ${id} no fue encontrado en base de datos`,
                msg: `Este usuario con el id: ${idUser} no fue encontrado en base de datos`, // Correccion: usar idUser
                data: null
            });
        }

        await user.destroy();

        return res.status(200).json({
            status: true,
            msg: `Usuario con el id: ${idUser}, ha sido eliminado de forma correcta`,
            // Estaba mal: data: userUpdated
            data: null // Correccion: data debe ser null después de la eliminación
        });
    } catch (error) {
        return res.status(500).json({
            status: false,
            // Estaba mal: msg: `Error al eliminar el usuario con id ${id}`,
            msg: `Error al eliminar el usuario con id ${req.params.id}: ${error.message}`, // Correccion: usar req.params.id para mayor claridad
            data: null
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
                data: null
            });
        }

        return res.status(200).json({
            status: true,
            msg: "Usuario encontrado de forma correcta",
            data: user
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            // Estaba mal (implícito): no había necesidad de corrección en la lógica, pero se estandariza el uso de req.params.id
            msg: `Error al obtener el usuario con id ${req.params.id}: ${error.message}`, // Correccion: usar req.params.id para consistencia
            data: null
        });
    }
}

const index = async (req, res) => {
    try {
        const users = await User.findAll();

        // Estaba mal: if(!users || users.length == 0){
        if (!users || users.length === 0) { // Correccion: usar comparación estricta ===
            return res.status(404).json({
                status: false,
                msg: "No existen usuarios en la base de datos",
                data: null
            });
        }
        return res.status(200).json({
            status: true,
            msg: "Listado de usuarios obtenido correctamente",
            data: users
        });

    } catch (error) {
        return res.status(500).json({
            status: false,
            msg: `Error al obtener el listado de usuarios: ${error.message}`,
            data: null
        });
    }
}


/* Exporta los modulos para su uso externo */
module.exports = {
    index,
    create,
    update,
    destroy,
    show,
};