const User = require ("../models/User")
const bcryptjs = require("bcryptjs")

const authControllers = {
    postUser: async (req,res) =>{
        const {name, lastname, photo, email, password, country} = req.body
        try{
        const userExist = await User.findOne({name})
        if (userExist){
            res.json({success:false, error: "Username is already registered", response: null})
        }
        const passwordHasheada = bcryptjs.hashSync(password,10)
        const newUser =  new User({name, lastname, photo, email, password:passwordHasheada, country})
        await newUser.save()
        res.json({success:true, response: newUser, error:null})
       }catch(error){
           res.json({success:false, response:null,error: error})
       } 
      },
    readUsers: (req, res) => {
        User.find().then((response)=>{
            res.json({response})
        })
    },
}

module.exports = authControllers