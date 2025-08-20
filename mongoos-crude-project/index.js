let express = require("express");
let mongoose = require("mongoose");
require("dotenv").config();
let app = express();
mongoose.connect(process.env.dburl).then(() => {
    console.log("Connected to MongoDB");
    app.listen(process.env.port)


});
