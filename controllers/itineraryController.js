const Itinerary = require('../models/Itinerary')

const itineraryController = {
  returnItineraries: (req, res) => {
    Itinerary.find()
    .populate('city')
    .then((response)=> res.json({response}))
  },

  returnItinerary: (req, res) => {
    Itinerary.findOne({_id: req.params.id})
    .then((response) => {res.json({response})})
    },

    returnItinerariesByCity: (req, res) => {
      Itinerary.find({city: {_id: req.params.city}})
          .then((response) => {
              res.json({response})
          })
          .catch((err) => console.log(err))
  },
    createItinerary:(req,res) =>{
      const {name, src, title, price, likes, duration, hashtags,comment, city} = req.body
      const itinerary = new Itinerary(req.body).save()
      .then((response) => res.json({itinerary: response, success:true}))
      .catch((e) => res.json({error : e.errors.Price}))
      
    },
    deleteItinerary: async (req,res) =>{
      const id = req.params
      try{
        await Itinerary.findOneAndDelete({_id:id})
      }
      catch(error){console.log(error)}
      res.json({success:true})
    },

    modifyItinerary: async(req,res) => {
      try{
          actualizado = await Itinerary.findOneAndUpdate({_id:req.params.id}, {...req.body}, {new:true})
      }catch(error){
          console.log(error)
      }
      res.json({success:actualizado ? true : false})
  }
};

module.exports = itineraryController;