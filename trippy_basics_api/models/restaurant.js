const mongoose = require("mongoose");
const mongoosePaginate = require ('mongoose-paginate');
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
restaurantSchema.plugin(mongoosePaginate);
const restaurantModel = mongoose.model("restaurants", restaurantSchema);
module.exports = restaurantModel;
