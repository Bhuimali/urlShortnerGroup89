const mongoose = require ('mongoose')
const shortId = require('shortid')

const urlSchema = new mongoose.schema({
    urlCode:{
        type : String,
        require : true,
        unique : true,
        lowercasse : true,
        trim : true
    },
    longUrl:{
        type : String,
        require : true
    },
    shortUrl:{
        type : String,
        require : true,
        unique : true
    }
},{timestamps : true});
module.exports = mongoose.model("Url",urlSchema);