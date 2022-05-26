const Sequelize = require('sequelize');
const conn = require('../../db')

const oleo = conn.define('oleo',{
    nome_comum: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nome_cientifico: {
        type: Sequelize.STRING,
        allowNull: false
    },
    foto: {
        type: Sequelize.STRING,
        allowNull: false
    },
    descricao: {
        type: Sequelize.STRING,
        allowNull: false
    }
})
module.exports = oleo
