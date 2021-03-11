const mongoose = require("mongoose");
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  name: String,
  address: String,
  city: String,
  country: String,
  stars: Number,
  cuisine: String,
  priceCategory: Number,
});

const restaurantModel = mongoose.model("restaurants", restaurantSchema);

module.exports = restaurantModel;
