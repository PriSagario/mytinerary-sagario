const mongoose = require('mongoose');

const ciudadSchema = new mongoose.Schema({
  name: {type: String, required: true},
  src: {type: String, required: true},
  description: {type: String},
})

const City = mongoose.model('city',ciudadSchema)

module.exports = City