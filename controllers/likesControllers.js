const Itinerary = require("../models/Itinerary")
const likesController = {
    like: async (req, res) => {
        const id = req.body.itineraryId
        console.log(req.body)
        const itinerary = await Itinerary.findOne({ _id: id })
        const likeExist = itinerary.likes.some((like) => like === req.body.userId)

        if (!likeExist) {
            Itinerary.findOneAndUpdate(
                { _id: id }, {
                $push: { likes: req.body.userId }
            },
                { new: true }
            )
                .then((response) => {
                    res.json({ response })
                })
                .catch((err) => {
                    console.log(err)
                })
        } else {
            Itinerary.findOneAndUpdate(
                { _id: id }, {
                $pull: { likes: req.body.userId }
            },
                { new: true }
            )
                .then((response) => {
                    res.json({ response })
                })
                .catch((err) => {
                    console.log(err)
                })
        }


    }
}

module.exports = likesController