const mongoose = require("mongoose");


const ApprenticeSchema = new mongoose.Schema(  { 

    name:{
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
    },

    question:{
        type: String,
        required: [true, "{PATH} is required."],
        minlength: [2, "{PATH} must be at least {MINLENGTH} characters"]
    },

    photo:{
        type: String,
        default: "no-photo.jpg"
    }


 }, {timestamps: true } );

const Apprentice = mongoose.model("Apprentice", ApprenticeSchema);

module.exports = Apprentice; 