const express = require('express')
const router = express.Router()

router.get('/login', (req, res) => {
  res.render('login')
})

//Login
router.post('/login', (req, res) => {

})

//Register
router.get('/register', (req, res) => {
  res.render('register')
})


module.exports = router