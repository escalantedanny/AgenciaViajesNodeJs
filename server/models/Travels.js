const Sequelize = require('sequelize');

const db = require('../config/database');

const travel = db.define('travels', {
    title: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    image: { type: Sequelize.STRING },
    price: { type: Sequelize.STRING },
    free: { type: Sequelize.STRING },
    departure_date: { type: Sequelize.DATE },
    arrival_date: { type: Sequelize.DATE },
});

module.exports =  travel;