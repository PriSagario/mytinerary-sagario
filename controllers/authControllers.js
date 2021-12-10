const User = require ("../models/User")
const bcryptjs = require("bcryptjs")
const jwt = require('jsonwebtoken')

const authControllers = {
    signUpUser: async (req,res) =>{
        const {name, lastname, photo, email, password, country} = req.body
        try{
        const userExist = await User.findOne({name})
        if (userExist){
            res.json({success:false, error: "Username is already registered", response: null})
        }
        else {
            const passwordHasheada = bcryptjs.hashSync(password, 10)
            const newUser = new User({ name, lastname, photo, email, password: passwordHasheada, country })
            await newUser.save()
            res.json({ success: true, response: newUser, error: null })
        }
       }catch(error){
           res.json({success:false, response:null,error: error})
       } 
      },
    readUsers: (req, res) => {
        User.find().then((response)=>{
            res.json({response})
        })
    },

    signInUser: async (req, res) => {
        const { email, password } = req.body
        try {
            const user = await User.findOne({ email })

            if (!user) {
                res.json({success:false, error: 'User does not exist', response: null})
            }
            else{
                const passwordIsOk = bcryptjs.compareSync(password, user.password)
                if (!passwordIsOk) {
                    res.json({success: false, response: user, error:"Email or password is incorrect. Try again"})
                    const token = jwt.sign(...user, process.env.SECRET_KEY)
                    console.log(token)
                } else {
                    res.json({success:true, response:{email}, error: null})
                } 
            } 
            
        } catch (error) {
            res.json({success:false, response: null, error: error})
        }
    },
}

module.exports = authControllers