//vamos a crear los puntos de acceso end point

const index = (req,res )=> {
    /* contiene nombre de funcion y dos atribustos requerimiento y respuesta */
try {
    res.status(200).json({mesage: "Ingreso al controlador de index"})
} catch (error) {
    res.status(404).json({mesage: "ruta error no encontrada"})
}
};

const create = (req,res )=> {
    /* contiene nombre de funcion y dos atribustos requerimiento y respuesta */
try {
    const id = req.params.id;
    res.status(200).json({mesage: `Ingreso al controlador de create ${id} `})
} catch (error) {
    res.status(404).json({mesage: "ruta error no encontrada"})
};

}

const update = (req,res )=> {
    /* contiene nombre de funcion y dos atribustos requerimiento y respuesta */
try {
    const id = req.params.id;
    res.status(200).json({mesage: `Se actualizo  al usuario id # ${id} `})
} catch (error) {
    res.status(404).json({mesage: "ruta error no encontrada"})
}
};

const destroy = (req,res )=> {
    /* contiene nombre de funcion y dos atribustos requerimiento y respuesta */
try {
    res.status(200).json({mesage:  `Se elimino  al usuario id # ${id} `})
} catch (error) {
    res.status(404).json({mesage: "ruta error no encontrada"})
}
};

const show = (req,res )=> {
    /* contiene nombre de funcion y dos atribustos requerimiento y respuesta */
try {
    res.status(200).json({mesage:  `Se muestra  al usuario id # ${id} `})
} catch (error) {
    res.status(404).json({mesage: "ruta error no encontrada"})
}
};

/* Expoeta el modulo para su uso externo */
module.exports={
    index,
    create,
    update,
    destroy,
    show,
};