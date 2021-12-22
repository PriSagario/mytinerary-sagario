const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
    user: { type: mongoose.Types.ObjectId, ref: "user" },
    itinerary: { type: mongoose.Types.ObjectId, ref: "itinerary" },
    message: { type: String, require: true }
});

const Comment = mongoose.model("comment", commentSchema);

module.exports = Comment;