const express = require('express');
const router = express.Router();

// importamos el controller
const nosotrosController = require('../controller/nosotrosController');
const homeController = require('../controller/homeController');
const viajesController = require('../controller/viajesController');
const testimonialController =  require('../controller/testimonialController');

// LA FORMA DE BUSCAR LAS RUTAS
module.exports = function() {
    // configuramos todas las rutas necesarias

    router.get('/', homeController.infoHome);

    router.get('/nosotros', nosotrosController.infoNosotros);

    router.get('/viajes', viajesController.mostrarViajes);

    router.get('/viajes/:id', viajesController.mostrarViaje);

    router.get('/testimoniales', testimonialController.mostrarTestimoniales);

    router.post('/testimoniales', testimonialController.mostrarTestimonial);

    // devolvemos la ruta
    return router;
}