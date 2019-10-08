const Sequelize = require('sequelize');

require('dotenv').config({ path: 'var.env' });

// configuramos la conexion a la base de datos local o en el servidor
//module.exports = new Sequelize('nombre base datos', 'usuario', 'password')
module.exports = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: 'mysql',
        define: {
            timestamps: false
        },
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000
        }
    })
    // ,operatorsAliases: false es por defecto no la necesita sequealize V5