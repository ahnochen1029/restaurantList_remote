const restaurantData = require('./restaurant.json')
const Restaurant = require('../restaurant')

db.once('open', () => {
  console.log('mongodb connected!')
  restaurantData.results.forEach(data => {
    Restaurant.create({
      "name": data.name,
      "name_en": data.name_en,
      "category": data.category,
      "image": data.image,
      "location": data.location,
      "phone": data.phone,
      "google_map": data.google_map,
      "rating": data.rating,
      "description": data.description,
    })
  })
})