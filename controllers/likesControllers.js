const Itinerary = require("../models/Itinerary")
const likesController = {
    like: async (req, res) => {
        const id = req.body.itineraryId
        const itinerary = await Itinerary.findOne({ _id: id }).lean()
        const likeExist = itinerary.likes.some((like) => like === req.body.userId)
        const action = likeExist ? "$pull": "$push"

            Itinerary.findOneAndUpdate(
                { _id: id }, {
                [action]: { likes: req.body.userId }
            },
                { new: true }
            )
                .lean()
                .then((response) => {
                    res.json({ response })
                })
                .catch((err) => {
                    console.log(err)
                })
    }
}

module.exports = likesController