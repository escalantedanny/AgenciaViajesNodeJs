
const testimonialModel = require('../models/Testimonials');

exports.mostrarTestimoniales =  (req, res) => {
    testimonialModel.findAll()
        .then(testimonials => res.render('testimoniales', { // aqui llamamos la carpeta donde se encuentra la vista
            pagina: 'Sobre Testimoniales',
            testimonial: testimonials
        }))
        .catch(error => console.log(error))
}

exports.mostrarTestimonial = (req, res) => {
    // validamos que todos los campos esten llenos

    let { title, email, message } = req.body;

    let errores = [];
    if (!title) {
        errores.push({ 'mensaje': 'Agrega tu nombre' })
    } else if (!email) {
        errores.push({ 'mensaje': 'Agrega tu Correo' })
    } else if (!message) {
        errores.push({ 'mensaje': 'Agrega un comentario' })
    }
    //revisar por errores
    if (errores.length > 0) {
        // muestra la vista con errores
        res.render('testimoniales', {
            errores,
            title,
            email,
            message
        })
    } else {
        // almacenaq en la base de datos
        testimonialModel.create({
            title,
            email,
            message
        }).then(testimonial => res.redirect('testimoniales'))
    }
}