const mongoose = require("mongoose");
const { Schema } = mongoose;

const roomSchema = new Schema({
    people: Number,
    price: Number,
    hasBathroom: Boolean,
});
const roomModel = mongoose.model("rooms", roomSchema);

module.exports = roomModel;


