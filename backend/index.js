const express = require("express");

//Inicializaciones
const app = express();

//Configuraciones
app.set('port', 3000);
//Arrancar el servidor
app.listen(app.get('port'), () => {
  console.log("Servidor escuchando en puerto 3000")
});
