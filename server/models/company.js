const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const companySchema = new Schema({
    name : String,
    category : String,
    location : String,
    address : String,
    sellerid : String,
    image : String,
    created : {
        type : Date,
        default : Date.now

    }
});

module.exports = mongoose.model('Company', companySchema);