const express = require('express')

//manipula rotas
const router = express.Router()

router.get('/categories', (req, res) =>{
    res.send('Rota categorias')
})


router.get('/admin/categories/new', (req, res) =>{
    res.send('Rota para cadastro')
})



module.exports = router
