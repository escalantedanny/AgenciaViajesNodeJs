const express = require('express');
const router = express.Router();

// LA FORMA DE BUSCAR LAS RUTAS
module.exports = function(){
    // configuramos todas las rutas necesarias

    router.get('/', (req, res) => {
        res.render('index', {
            pagina: 'Sobre Inicio'
        }); // aqui llamamos la carpeta donde se encuentra la vista
    })

    router.get('/nosotros', (req, res) => {
        res.render('nosotros', {
            pagina: 'Sobre Nosotros'
        }); // aqui llamamos la carpeta donde se encuentra la vista
    })

    router.get('/viajes', (req, res) => {
        res.render('viajes', {
            pagina: 'Sobre Viajes'
        }); // aqui llamamos la carpeta donde se encuentra la vista
    })

    router.get('/testimoniales', (req, res) => {
        res.render('testimoniales', {
            pagina: 'Sobre Testimoniales'
        }); // aqui llamamos la carpeta donde se encuentra la vista
    })

    // devolvemos la ruta
    return router;
}