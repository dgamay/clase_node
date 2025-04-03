//vamos a crear los puntos de acceso end point

const index = (req,res )=> {
    /* contiene nombre de funcion y dos atribustos requerimiento y respuesta */

try {
    res.status(200).json({message: "Ingreso a l controlador de index"})
} catch (error) {
    res.status(404).json({message: "ruta error no encontrada"})
}
};

/* Funcion create, crea un nuevo usuario */
const create = (req, res)=>{

    try {
        const id =req.params.id;
        res.status(200).json({message: `Se creo  con exito el registro # ${id}`})
    } catch (error) {
        res.status(404).json({message: "ruta error no encontrada"})
    }

};

const update = (req, res)=>{

    try {
        const id =req.params.id;
        res.status(200).json({message: `Se actualizo con exito el registro # ${id}`})
    } catch (error) {
        res.status(404).json({message: "ruta error no encontrada"})
    }

};
const destroy = (req, res)=>{

    try {
        const id =req.params.id;
        res.status(200).json({message: `Se elimino con exito el registro # ${id}`})
    } catch (error) {
        res.status(404).json({message: "ruta error no encontrada"})
    }

};
const show = (req,res)=>{
    try {
        const id =req.params.id;
        res.status(200).json({message: `Se mostro con exito el registro # ${id}`})
    } catch (error) {
        res.status(404).json({message: "ruta error no encontrada"})
    }

}


/* Exporta los modulos para su uso externo */
module.exports={
    index,
    create,
    update,
    destroy,
    show,
};