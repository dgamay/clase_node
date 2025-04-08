const PORT = 3000; // constante para definir puerto

require("dotenv").config();

const express = require('express') ;//llamado al servicio de express

const app = express(); // Se agrega el servidor  a esta constante lo que facilita su llamado

const cors = require("cors")

app.use (cors())

app.use(express.json());

const routes =require("./api.routes") //llado de api.routes
app.use('/api/v1',routes);

app.get('/',(req, res)=>{ //ruta sin parametro que se mostrara en el navegador
    res.send('Hola mundo!!, desde Node con express');
});

const sequelize = require('./src/models/dbconection');
require('./src/models/sync_tables');


app.listen(PORT,async()=>{// inicializamos servidor
    console.log(process.env.BIENVENIDA, process.env.PORT, process.env.BIENVENIDA2  );
    
    try {
        /* Conexion a las base de datos */
        await sequelize.authenticate();
        console.log('Conexion Exitosa a la base de datos!!');

        /* Crear las tablas si no existen y actualiza los datos */
        await sequelize.sync({alter: true})/* sincroniza las tablas con  */
        console.log('Tablas sincronizadas');
        
    } catch (error) {
        console.error('Error conectando a la base de datos',error);
        
    }
});