const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String
})

UserSchema.methods("toJson", function () {
    const { __v, _id, ...object } = this.toObject()
    object.id = _id
    return object
})

module.exports = mongoose.model('User', UserSchema)