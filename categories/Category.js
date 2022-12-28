const Sequelize = require('sequelize')
const connection = require('../database/database')

const Category = connection.define('categories',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{//slug - usado para substituir espaco por caractere no titulo
        type: Sequelize.STRING,
        allowNull: false
    }
})


//para criar as tabelas e seus relacionamentos
//executar o sync
//somente UMA vez
// --->>> Category.sync({force: true}) <<<---

module.exports = Category