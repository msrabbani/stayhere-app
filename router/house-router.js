const express = require('express')
const router = express.Router()
const model = require('../models')

// router.get('/', (req,res)=>{
//   model.House.findAll()
//   .then(row1 => {
//       model.CustomerHouse.findAll()
//     //   model.CustomerHouse.findAll({ // average rating di sequelize
//     //     attributes: ['HouseId',
//     //     [model.sequelize.fn('AVG', model.sequelize.col('rating')), 'avg']],
//     //     group:['HouseId']})
//      .then(row2=>{
//         //  console.log(row2.);
//         //  console.log("ini row2 ---------",row2.CustomerHouse);
//         //   console.log("++++++++++++++++++++++++++", JSON.stringify(row2, null, 2));
//
//          for (var i = 0; i < row1.length; i++) {
//             //  let avg = 0
//              let count = 0
//              row1[i]['rating'] = 0
//              for (var j = 0; j <row2.length; j++) {
//                  console.log('sgjsgjhgjdhgjk');
//                  if (row1[i].HouseId == row2[j].HouseId) {
//                      console.log('==============masuk gak ya================');
//                      count++
//                      row1[i]['rating'] += row2[j].rating
//                  } else {console.log('------GAMASUKCOY------');}
//              }
//              row1[i]['rating']=Math.floor(row1[i]['rating']/count)
//          }
//          res.render('houses', {dataHouse: row1, dataRating:row2})
//         //  for (var i = 0; i < row2.length; i++) {
//         //     for (var j = 0; j < row1.length; j++) {
//         //      if(row1[j].id == row2[i].HouseId) {
//         //          row1[j].rating = row2[i].avg_rating
//         //      }
//         //     }
//             // console.log('=============================', JSON.stringify(row1, null,2));
//             // console.log('+++++++++++++++++++++++++++++', JSON.stringify(row2[0], null,2));
//         })
//     })
// })

router.get('/', (req,res) => {
    model.House.findAll()
    .then(data_house => {
        model.CustomerHouse.findAll()
        .then(data_rating => {
            for(i=0; i<data_house.length; i++) {
                var count=0;
                data_house[i].avg_rating=0;
                for(j=0; j<data_rating.length; j++) {
                    if(data_house[i].id == data_rating[j].HouseId) {
                        count++;
                        data_house[i].avg_rating += data_rating[j].rating
                    }
                }
                data_house[i].avg_rating = Math.floor(data_house[i].avg_rating/count)
            }
            res.render('houses', {dataHouse: data_house, dataRating:data_rating})
            // console.log('=================', JSON.stringify(data_house[0].avg_rating, null,2));
        })
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

//////////////////////////////////////////////////////////////

router.get('/detail/:id', (req,res)=>{
    model.House.findById(req.params.id)
    .then(data_house=>{
        model.Customer.findAll()
        .then(data_cus=>{
            model.CustomerHouse.findAll({
                where: {
                    HouseId: req.params.id
                }
            })
            .then(data_ch=>{
                for (var i = 0; i < data_ch.length; i++) {
                    for (var j = 0; j < data_cus.length; j++) {
                        if (data_ch[i].CustomerId === data_cus[j].id) {
                            data_ch[i]['name'] = data_cus[j].username
                        }
                    }
                }
                // console.log('===>',JSON.stringify(row3,null,2));
                res.render('detail-house', {dataH:data_house, dataCos:data_cus, dataCH:data_ch})
            })

        })
    })
})

router.post('/detail/:id', (req,res)=>{
    model.CustomerHouse.create({
        CustomerId: req.body.CustomerId,
        HouseId: req.params.id,
        rating: req.body.rating,
        comment: req.body.comment,
        createAt: new Date(),
        updateAt: new Date()
    })
    .then(() => {
        model.House.findById(req.params.id)
        .then(row1=>{
            model.Customer.findAll()
            .then(row2=>{
                model.CustomerHouse.findAll({
                    where: {
                        HouseId: req.params.id
                    }
                })
                .then(row3=>{
                    res.render('detail-house', {dataH:row1, dataCos:row2, dataCH:row3})
               })
            })
        })
    })
})

module.exports = router
