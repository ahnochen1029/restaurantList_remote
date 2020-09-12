const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

router.get('/', (req, res) => {
  const sortBy = req.query.by
  console.log('sortBy', sortBy)
  const sort = req.query.sort
  console.log('sort', sort)
  let method = {}
  switch (sort) {
    case 'name-asc':
      method = { name: 'asc' }
      break
    case 'name-desc':
      method = { name: 'desc' }
      break
    case 'location-asc':
      method = { location: 'asc' }
      break
    case 'rating-desc':
      method = { rating: 'desc' }
      break
  }
  console.log('method', method)
  Restaurant.find()
    .lean()
    .sort(method)
    .then(restaurant => res.render('index', { restaurant, sort }))
    .catch(error => console.log(error))
})

module.exports = router