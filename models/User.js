const { boolean } = require('joi');
const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
name: {type: String, required: true},
lastname: {type: String, required: true},
password:{type:String, required:true},
email:{type:String, required:true},
country:{type: String},
photo:{type: String},
google: {type: Boolean, default:false}
})

const User = mongoose.model('user', userSchema)

module.exports = User