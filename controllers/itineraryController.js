const Itinerary = require('../models/Itinerary')
const Comment = require("../models/Comment");

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
  },
  getCommentsByItineraryId: async (req, res) => {
    try {
      let commentList = await Comment.find({
        itinerary: req.body.itinerary,
      }).populate({ path: "user", select: ["name", "email", "photo"] });
      res.json({ success: true, error: null, response: commentList });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
    }
  },
  postComment: async (req, res) => {
    const { user, itinerary, message } = req.body;
    try {
      await new Comment({ user, itinerary, message }).save();
      res.json({
        success: true,
        response: "Uploaded comment with message: " + message,
        error: null,
      });
    } catch (e) {
      res.json({ success: false, error: e, response: null });
      console.error(e);
    }
  },
  editComment: async (req, res) => {
    try {
      let commentEdit = await Comment.findOneAndUpdate({ _id: req.body.id }, {message: req.body.message}, {new: true});
      res.json({
        success: true,
        response: commentEdit
      });
    } catch (e) {
      res.json({ success: false, error: e });
      console.error(e);
    }
  },
  deleteComment: async (req, res) => {
    try {
      await Comment.findOneAndDelete({ _id: req.body.id });
      res.json({
        success: true,
        response: "Deleted comment with id" + req.body.id,
      });
    } catch (e) {
      res.json({ success: false, error: e });
      console.error(e);
    }
  },
};

module.exports = itineraryController;