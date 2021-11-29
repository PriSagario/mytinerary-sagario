const mongoose = require('mongoose');

const ciudadSchema = new mongoose.Schema({
  name: {type: String, required: true},
  src: {type: String, required: true},
  description: {type: String},
  country: {type: String, required: true}
})

const City = mongoose.model('city',ciudadSchema)

module.exports = City