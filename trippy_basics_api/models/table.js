const mongoose = require("mongoose");
const { Schema } = mongoose;

const tableSchema = new Schema({
    seat: Number,
    isVip: Boolean,
});
const tableModel = mongoose.model("tables", tableSchema);

module.exports = tableModel;
