const express = require('express')

//manipula rotas
const router = express.Router()
const Category = require('./Category')
const slugify = require('slugify')


router.get('/admin/categories/new', (req, res) =>{
    res.render('../views/admin/categories/new.ejs')
})

router.post('/categories/save', (req, res) =>{
    var title = req.body.title
    if(title != undefined && title != ' ' && title != null){
        Category.create({
            title: title,
            slug: slugify(title)
        }).then(() =>{
            res.redirect('/')
        })

    }else{
        res.redirect('/admin/categories/new')
    }
})

router.get('/admin/categories', (req, res) =>{

    Category.findAll().then(categories =>{
        res.render('../views/admin/categories/index.ejs', {categories : categories})

    })
    
})



module.exports = router
