const travelModel = require('../models/Travels');

exports.mostrarViajes = (req, res) => {
    travelModel.findAll()
        .then(travels => res.render('viajes', {
            pagina: 'Sobre Viajes',
            viajes: travels
        }))
        .catch(error => console.log(error))
}

exports.mostrarViaje = (req, res) => {
    travelModel.findByPk(req.params.id)
        .then(travel => res.render('viajes/viaje', {
            pagina: 'Pagina del Viaje',
            travel
        })) // con esto leemos la url o el parametro de la url para pasarlo a la vista
        .catch(error => console.log(error))
}