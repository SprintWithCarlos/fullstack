if (process.env.NODE_ENV !== "production") {
  require('dotenv').config();
}




const express = require("express");
const path = require("path");
const morgan = require("morgan");
const multer = require("multer");

require('cross-env')
//Inicializaciones
const app = express();
require('./database');
//Configuraciones
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan("dev"));
const storage = multer.diskStorage({
  destination: path.join(__dirname, 'public/uploads'),
  filename(req, file, cb) {
    cb(null, new Date().getTime() + path.extname(file.originalname));
  }
});
app.use(multer(storage).single('image'));
app.use(express.urlencoded({
  extended: false
}));
app.use(express.json());

//Routes
app.use("/api/books", require("./routes/books"))

//Static Files
app.use(express.static(path.join(__dirname, 'public')))

//Arrancar el servidor
app.listen(app.get('port'), () => {
  console.log(`Servidor escuchando en puerto ${app.get('port')}`)
})
