const mongoose = require('mongoose')

const Schema = mongoose.Schema

const usersSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type:String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true
    },
    rollno:{
        type: String,
        required: true
    }


})

module.exports = mongoose.model('users', usersSchema)