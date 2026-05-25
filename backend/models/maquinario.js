const { DataTypes, Sequelize } = require('sequelize')
const db = require('../db/conn')

const maquinario = db.define('maquinario',{
    codMaquinario: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
    type: DataTypes.STRING,
    allowNull: false   
    },
    marca: {
    type: DataTypes.STRING,
    allowNull: false   
    },
    tipo: {
    type: DataTypes.STRING,
    allowNull: false   
    },
    ano: {
    type: DataTypes.INTEGER,
    allowNull: false   
    },
    precoCusto: {
    type: DataTypes.FLOAT,
    allowNull: false   
    }
    },{
        timestamps: false
    }
)
module.exports = maquinario