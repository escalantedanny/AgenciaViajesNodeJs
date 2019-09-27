const express = require('express');
const router = express.Router();

// instanciamos el modelo para ser utilizado en las vistas
const travelModel = require('../models/Travels');
const testimonialModel = require('../models/Testimonials');

// LA FORMA DE BUSCAR LAS RUTAS
module.exports = function() {
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
        travelModel.findAll()
            .then(travels => res.render('viajes', {
                pagina: 'Sobre Viajes',
                viajes: travels
            }))
            .catch(error => console.log(error))
    })

    router.get('/viajes/:id', (req, res) => {
        travelModel.findByPk(req.params.id)
            .then(travel => res.render('viajes/viaje', {
                pagina: 'Pagina del Viaje',
                travel
            })) // con esto leemos la url o el parametro de la url para pasarlo a la vista
            .catch(error => console.log(error))
    })

    router.get('/testimoniales', (req, res) => {
        testimonialModel.findAll()
            .then(testimonials => res.render('testimoniales', { // aqui llamamos la carpeta donde se encuentra la vista
                pagina: 'Sobre Testimoniales',
                testimonial: testimonials
            }))
            .catch(error => console.log(error))
    })

    router.post('/testimoniales', (req, res) => {
        // validamos que todos los campos esten llenos
        let {name, mail, message} = req.body;

        let errores = [];
        if(!name){
            errores.push({'mensaje': 'Agrega tu nombre'})
        }else if(!mail){
            errores.push({'mensaje': 'Agrega tu Correo'})
        }else if(!message){
            errores.push({'mensaje': 'Agrega un comentario'})
        }
        //revisar por errores
        if(errores.length > 0){
            // muestra la vista con errores
            res.render('testimoniales', {
                errores,
                name,
                mail,
                message
            })
        } else {
            // almacenaq en la base de datos
            testimonialModel.create({
                name,
                mail,
                message
            }).then( testimonial => res.redirect('testimoniales') )
        }
    })

    // devolvemos la ruta
    return router;
}