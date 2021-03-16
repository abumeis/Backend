const mongoose = require("mongoose");
const mongoosePaginate = require ('mongoose-paginate');
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
  rooms: [{ type: mongoose.Types.ObjectId, ref: "rooms" }],

});
hotelSchema.plugin(mongoosePaginate);
const hotelModel = mongoose.model("hotels", hotelSchema);

module.exports = hotelModel;
