const  mongoose = require("mongoose");
const Schema =  mongoose.Schema;

const productSchema = new Schema({
    name : String,
    price : String,
    image : String,
    quantity :  String,
    category : String,
    created : {
        type : Date,
        default : Date.now

    }

})
module.exports = mongoose.model('Product', productSchema);