const express = require('express')
const router = express.Router()
const model = require('../models')

router.get('/', (req,res)=>{
  model.House.findAll()
  .then(rows => {
    res.render('houses', {dataHouse: rows})
  })
})

router.post('/', (req,res)=> {
  model.House.create(req.body)
  .then(()=> {
    res.redirect('/houses')
  })
})

router.get('/edit/:id', (req,res)=> {
  model.House.findById(req.params.id)
  .then(row => {
    res.render('edit-house', {dataHouse: row})
  })
})

router.post('/edit/:id', (req,res)=> {
  model.House.update(req.body, {
    where: {id: req.params.id}
  })
  .then(() => {
    res.redirect('/houses')
  })
})

router.get('/delete/:id', (req,res) => {
  model.House.destroy({
    where: {id: req.params.id}
  })
  .then(()=> {
    res.redirect('/houses')
  })
})

module.exports = router
