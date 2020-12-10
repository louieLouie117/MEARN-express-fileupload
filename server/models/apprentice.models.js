const mongoose = require("mongoose");


const ApprenticeSchema = new mongoose.Schema(  { 

    name:{
        type: String,

    },

    question:{
        type: String,

    },

    file:{
        type: String,
        default: "no-photo.jpg"
    }


 }, {timestamps: true } );

const Apprentice = mongoose.model("Apprentice", ApprenticeSchema);

module.exports = Apprentice; 