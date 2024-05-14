const { Timestamp } = require("mongodb");
const mongoose = require("mongoose");

const People_Schema = new mongoose.Schema({
    first_name:{
        type: String,
        trim: true,
    },
    last_name:{
        type: String,
        trim: true,
    },
    email:{
        type: String,
        trim: true,
    },
    contact:{
        type: Number,
        trim: true,
    },
}, {
    timestamps: true,
});

const People = mongoose.model("People", People_Schema);

module.exports = People;
