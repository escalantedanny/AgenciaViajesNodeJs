const Sequelize = require('sequelize');

// configuramos la conexion a la base de datos local o en el servidor
//module.exports = new Sequelize('nombre base datos', 'usuario', 'password')
module.exports = new Sequelize('agenciadeviajes', 'root', '', {
    host: '127.0.0.1',
    port: '3306',
    dialect: 'mysql',
    define:{
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