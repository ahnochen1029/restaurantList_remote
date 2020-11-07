const express = require('express')
const exphds = require('express-handlebars')
const methodOverride = require('method-override')
const bodyParser = require('body-parser')
const hbshelpers = require('handlebars-helpers')
const routes = require('./routes')
const session = require('express-session')

const usePassport = require('./config/passport')
require('./config/mongoose')


const app = express()
const port = 3000

app.engine('handlebars', exphds({ defaultLayout: 'main', helpers: hbshelpers() }))
app.set('view engine', 'handlebars')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

usePassport(app)

app.use(routes)

app.use(session({
  secret: 'ThisIsMySecret',
  resave: false,
  saveUninitialized: true
}))

//setting static files
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`The website is http://localhost:${port}`)
})