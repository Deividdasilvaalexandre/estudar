const { Sequelize } = require('Sequelize')
const db = new Sequelize('db_maquinario','root','senai',{
    host: 'localhost',
    dialect: 'mysql',
    PORT: 3306
})

module.exports = db