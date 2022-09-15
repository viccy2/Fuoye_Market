const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name : String,
    username : String,
    email : String,
    password : String,
    accountType: String,
    location : String,
    image : String,
    code : String,
    status : String,
    created : {
        type : Date,
        default : Date.now

    }
});

module.exports = mongoose.model('User', userSchema);