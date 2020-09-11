const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const keyword = req.query.keyword.toLocaleLowerCase()
  Restaurant.find()
    .lean()
    .then(restaurants => {
      const restaurant = restaurants.filter(restaurant => restaurant.name.toLocaleLowerCase().includes(keyword))
      res.render('index', { restaurant, keyword })
    })
    .catch(error => console.log(error))
})

module.exports = router