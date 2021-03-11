const mongoose = require("mongoose");
const { Schema } = mongoose;

const hotelSchema = new Schema({
  name: String,
  address: String,
  country: String,
  city: String,
  stars: Number,
  hasSpa: Boolean,
  hasPool: Boolean,
  priceCategory: Number,
});

const hotelModel = mongoose.model("hotels", hotelSchema);

module.exports = hotelModel;
