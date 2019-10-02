const travelModel = require('../models/Travels');
const testimonialModel = require('../models/Testimonials');

exports.infoHome = (req, res) => {
    const promises = [];

    promises.push(
        travelModel.findAll({
            limit: 3
        })
    )

    promises.push(
        testimonialModel.findAll({
            limit: 3
        })
    )

    const resultado = Promise.all(promises);

    resultado.then(resultado => res.render('index', {
        clase: 'home',
        pagina: 'Sobre Viajes',
        viajes: resultado[0],
        testimonial: resultado[1]
    }))
    .catch(error => console.log(error))

}