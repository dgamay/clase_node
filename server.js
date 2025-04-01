const PORT = 3000; // constante para definir puerto

require("dotenv").config();

const express = require('express') ;//llamado ala servicio de express

const app = express(); // Se agrega el servidor  a esta constante lo que facilita su llamado

app.get('/',(req, res)=>{ //ruta sin parametro que se mostrara en el navegador
    res.send('Hola mundo!!, desde Node con express');
});

app.listen(PORT,()=>{// inicializamos servidor
    console.log(process.env.BIENVENIDA, process.env.PORT, process.env.BIENVENIDA2  );
    
});