const Sequelize = require('sequelize')
const connection = require('../database/database')
const Category = require('../categories/Category')

const Article = connection.define('articles',{
    title:{
        type: Sequelize.STRING,
        allowNull: false
    },slug:{//slug - usado para substituir espaco por caractere no titulo
        type: Sequelize.STRING,
        allowNull: false
    },body:{
        type: Sequelize.TEXT,
        allowNull: false
    }
})

//um artigo pertence a uma categoria
//relacionamento 1 p/ 1 (tabelas no banco)
Article.belongsTo(Category)

//uma categoria tem varios artigos
//relacionamento 1 p/ n (tabelas no banco)
Category.hasMany(Article)


//para criar as tabelas e seus relacionamentos
//executar o sync
//somente UMA vez
// --->>> Article.sync({force: true}) <---

module.exports = Article