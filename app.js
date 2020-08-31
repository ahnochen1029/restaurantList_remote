const express = require('express')
const mongoose = require('mongoose')
const exphds = require('express-handlebars')
const app = express()
const restaurantList = require('./models/seeds/restaurant.json')
const port = 3000
const bodyParser = require('body-parser')
const Restaurant = require('./models/restaurant')
const restaurant = require('./models/restaurant')


mongoose.connect('mongodb://localhost/restaurant', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected')
})
app.use(bodyParser.urlencoded({ extended: true }))

app.engine('handlebars', exphds({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  Restaurant.find()
    .lean()
    .then(restaurant => res.render('index', { restaurant }))
    .catch(error => console.error(error))
})

app.get('/search', (req, res) => {
  const keyword = req.query.keyword
  const restaurant = restaurantList.results.filter(restaurant => {
    return restaurant.name.toLowerCase().includes(keyword.toLocaleLowerCase())
  })
  res.render('index', { restaurants: restaurant, keyword: keyword })
})

app.get('/restaurants/:id', (req, res) => {
  const id = req.params.id
  console.log(id)
  return Restaurant.findById(id)
    .lean()
    .then((restaurant) => res.render('show', { restaurant }))
    .catch(error => console.log(error))
  // const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.id)
  // res.render('show', { restaurant: restaurant })
})

app.get('/new', (req, res) => {
  return res.render('new')
})

app.post('/restaurants', (req, res) => {
  const name = req.body.name
  const name_en = req.body.name_en
  const category = req.body.category
  const image = req.body.image
  const location = req.body.location
  const phone = req.body.phone
  const google_map = req.body.google_map
  const rating = req.body.rating
  const description = req.body.description
  return Restaurant.create({ name, name_en, category, image, location, phone, google_map, rating, description })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))
})

//setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`The website is http://localhost:${port}`)
})