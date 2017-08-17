const express = require('express')
const router = express.Router()
let model = require('../models')

router.get('/', (req,res)=>{
    model.Customer.findAll()
    .then((x)=>{
        res.render('customer', {dataCus:x})
    })
})

router.post('/', (req,res)=>{
    model.Customer.create({
        name:req.body.name,
        username:req.body.username,
        address:req.body.address,
        phone:req.body.phone,
        email:req.body.email,
        createdAt: new Date(),
        updatedAt: new Date()
    }).then(()=>{
        res.redirect('/customers')
    })
})

 router.get('/edit/:id', (req,res)=>{
     model.Customer.findById(req.params.id)
     .then((x)=>{
         res.render('customer-edit', {dataCus:x})
     })
 })

 router.post('/edit/:id', (req,res)=>{
     model.Customer.update({
         name:`${req.body.name}`,
         username:`${req.body.username}`,
         address:`${req.body.address}`,
         phone:`${req.body.phone}`,
         email:`${req.body.email}`,
         createdAt: new Date(),
         updatedAt: new Date()
     },{
         where:{id:`${req.params.id}`}
     }).then(()=>{
         res.redirect('/customers')
     })
 })

router.get('/delete/:id', (req,res)=>{
    model.Customer.destroy({
        where:{id:`${req.params.id}`}
    }).then(()=>{
        res.redirect('/customers')
    })
})


module.exports = router
