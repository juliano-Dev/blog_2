const express = require('express')

//manipula rotas
const router = express.Router()

router.get('/articles', (req, res) =>{
    res.send('Rota artigos')
})

router.get('/admin/articles/new', (req, res) =>{
    res.send('Rota para cadastro')
})


module.exports = router
