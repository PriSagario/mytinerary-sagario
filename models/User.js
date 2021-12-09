const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: {type: String, required: true},
lastname: {type: String, required: true},
photo:{type: String},
email:{type:String, required:true},
password:{type:String, required:true},
country:{type:Array}
})

const User = mongoose.model('user', userSchema)

module.exports = User