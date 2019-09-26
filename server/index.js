// importar el servidor express
const express = require('express');
const path =  require('path');
const routes = require('./routes');

const configs =  require('./config');

//configurar el servidor express
const app = express();

// habilitamos pug
app.set('view engine', 'pug');

//donde encontrar los templates
app.set('views', path.join(__dirname, './views'));

//cargar una carpeta estatica llamada PUBLIC
app.use(express.static('public'));


// validar si estamos en development o en production
const config = configs[app.get('env')];

// creamos la variable para el sitio web
app.locals.titulo = config.nombresitio;

//muestra el año actual
app.use( (req, res, next) => {
    //creamos las variables necesarias para los templates
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    return next();
})

//cargamos todas las rutas necesarias
app.use('/', routes());

//configuramos el puerto
app.listen(3000);