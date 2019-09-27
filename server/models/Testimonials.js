const Sequelize = require('sequelize');

const db = require('../config/database');

const testimonials = db.define('testimonials', {
    title: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    message: { type: Sequelize.STRING },
});

module.exports = testimonials;