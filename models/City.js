const mongoose = require('mongoose');

const productoSchema = new mongoose.Schema({
    city: {type: String, required: true},
    country:{type:String},
    image:{type:image}
})