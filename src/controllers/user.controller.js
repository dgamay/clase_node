//vamos a crear los puntos de acceso end point

const index = (req,res )=> {
    /* contiene nombre de funcion y dos atribustos requerimiento y respuesta */

try {
    res.status(200).json({mesage: "Ingreso a l controlador de index"})
} catch (error) {
    res.status(404).json({mesage: "ruta error no encontrada"})
}
};
/* Expoeta el modulo para su uso externo */
module.exports={
    index,
};