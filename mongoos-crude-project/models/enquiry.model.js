let express = require("express");
let mongoose = require("mongoose");

let schemacollection = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    message: {
        type: String,
        required: true
    }

});
let Enquiry = mongoose.model("Enquiry", schemacollection);
module.exports = Enquiry;