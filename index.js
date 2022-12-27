const express = require('express')
const app = express()
const port = 3030

const bodyParser = require('body-parser')

const connection = require('./database/database')

//view engine - config padroes html
app.set('view engine', 'ejs')

//body parser - para usar dados de formulario e json
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//static - css, img
app.use(express.static('public'))

//database

connection
    .authenticate()
    .then(() => {
        console.log('Conexao ao banco estabelecida')
    }).catch((error) =>{
        console.log(error)
    })



app.get('/', (req, res) =>{
    //res.send('Bem vindo')
    res.render('index')
})



app.listen(port, () =>{
    console.log(`Servidor rodando porta - ${port}`)
})