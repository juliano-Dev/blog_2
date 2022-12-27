
const Sequelize = require('sequelize')

const connection = new Sequelize('blog', 'root', 'imortal1983',{
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = connection