const bcrypt = require('bcryptjs')

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const restaurantData = require('./restaurant.json')
const Restaurant = require('../restaurant')

const db = require('../../config/mongoose')
const User = require('../user')

const SEED_USER = [
  {
    name: 'user1',
    email: 'user1@example.com',
    password: '12345678'
  },
  {
    name: 'user2',
    email: 'user2@example.com',
    password: '12345678'
  },
]

// const SEED_USER = {
//   name: 'user1',
//   email: 'user1@example.com',
//   password: '12345678'
// }

db.once('open', () => {
  const userlist = restaurantData.results.splice(0, 6)
  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER[0].password, salt))

    .then(hash => {
      SEED_USER.forEach(SEED_USER => SEED_USER.password = hash)
      return User.insertMany(SEED_USER)
    })
    .then(user => {
      return Promise.all(userlist.map((restaurant, index) => {
        if (index < 3) {
          restaurant.userId = user[0]._id
          return Restaurant.create(Object.assign({}, restaurant))
        } else {
          restaurant.userId = user[1]._id
          return Restaurant.create(Object.assign({}, restaurant))
        }
      }))
    })
    // .then(user => {
    //   return Promise.all(userlist2.map((restaurant, index) => {
    //     if (index < 3) {
    //       console.log('user2done')
    //       restaurant.userId = user[1]._id
    //       console.log('user[1]._id', user[1]._id)
    //       return Restaurant.create(Object.assign({}, restaurant))
    //     }
    //   }))
    // })
    .then(() => {
      console.log('done.')
      process.exit()
    })
})

