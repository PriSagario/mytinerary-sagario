const mongoose = require('mongoose');

const itinerarySchema = new mongoose.Schema({
  name: {type: String, required: true},
  src: {type: String, required: true},
  title: {type: String, required: true},
  price: {type: Number, min:1, max:5, required: true},
  duration: {type: Number, min:1, required: true},
  likes: {type: Number, default: 0, required: true},
  hashtags: {type: [], required: true},
  comments: {type: []},
  city: [
    {type: mongoose.Types.ObjectId, ref: 'city' }
  ]
})



const Itinerary = mongoose.model('itinerary',itinerarySchema)

module.exports = Itinerary