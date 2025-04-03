const { Sequelize }= require("sequilize");


const sequileze = new Sequilize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSSWORD,
    
    
    {
        host:process.env.DB_HOST, 
        port:process.env.DB_PORT,
        dialect:process.env.DB_DIALECT,
        timezone: "-05:00",
    }
);
/* Exportamos el modulo */
module.exports = sequileze;