const mongoose = require('mongoose')

const AnimeSchema = new mongoose.Schema({
    name: String,
    description: String,
    image: String,
    episodes: Number,
    status: String,
    genres: [String],
    rating: Number,
    views: Number
})

AnimeSchema.method("toJson", function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = mongoose.model('Anime', AnimeSchema)