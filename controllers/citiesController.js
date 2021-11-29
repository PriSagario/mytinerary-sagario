const City = require('../models/City')

const citiesController = {
    readCities: (req, res) => {
        const cities = City.find().then((response) => {
            res.json({ response })
        })
    },

    readCity: (req, res) => {
        const city = City.findOne({_id: req.params.id }).then((response) => {
            res.json({ response })
        })
    },

    createCity: (req, res) => {
        const { name, src, description, _id } = req.body
        const city = new City({ name, src, description, _id })
            .save()
            .then((response) => {
                res.json({ response : { city }})
        console.log(response)

     })
    },

    deleteCity: async (req,res) =>{
        const id = req.params
        try{
          await City.findOneAndDelete({_id:id})
        }catch(error){
          console.log(error)
        }
        res.json({success:true})
      },
      
      modifyCity: async(req,res) => {
        let id =req.params.id
        let city = req.body
        let actualizado
        try{
          actualizado = await City.findOneAndUpdate({_id:id}, {...city}, {new:true})
        }catch(error){
          console.log(error)
        }
        res.json({success:actualizado ? true : false})
      }

}

module.exports = citiesController