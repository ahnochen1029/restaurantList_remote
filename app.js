const express = require('express')
const mongoose = require('mongoose')
const exphds = require('express-handlebars')
const methodOverride = require('method-override')

const port = 3000
const bodyParser = require('body-parser')
const routes = require('./routes')

const app = express()
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

app.use(methodOverride('_method'))
app.use(routes)


//setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`The website is http://localhost:${port}`)
})